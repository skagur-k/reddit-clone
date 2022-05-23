import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { ADD_POST, ADD_SUBREDDIT } from '../graphql/mutations'
import { GET_SUBREDDIT_BY_TOPIC } from '../graphql/queries'
import client from '../apollo-client'

type FormData = {
    postTitle: string
    postBody: string
    postImage: string
    subreddit: string
}

function PostBox() {
    const [imageBoxOpen, setImageBoxOpen] = useState<Boolean>(false)
    const { data: session } = useSession()
    const [addPost] = useMutation(ADD_POST)
    const [addSubreddit] = useMutation(ADD_SUBREDDIT)

    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = handleSubmit(async (formData) => {
        console.log(formData)

        try {
            // query subreddit topic
            const {
                data: { getSubredditListByTopic },
            } = await client.query({
                query: GET_SUBREDDIT_BY_TOPIC,
                variables: {
                    topic: formData.subreddit,
                },
            })

            const subredditExists = getSubredditListByTopic.length > 0

            if (!subredditExists) {
                // create subreddit
                console.log('Subreddit is new! ===> Creating new subreddit')
                const {
                    data: { insertSubreddit: newSubreddit },
                } = await addSubreddit({
                    variables: {
                        topic: formData.subreddit,
                    },
                })

                console.log('Creating post...', formData)
                const image = formData.postImage || ''

                const {
                    data: { insertPost: newPost },
                } = await addPost({
                    variables: {
                        body: formData.postBody,
                        iamge: image,
                        subreddit_id: newSubreddit.id,
                        title: formData.postTitle,
                        username: session?.user?.name,
                    },
                })

                console.log('New Post added: ', newPost)
            } else {
                // use existing subreddit
                console.log(subredditExists)
                const image = formData.postImage || ''

                const {
                    data: { insertPost: newPost },
                } = await addPost({
                    variables: {
                        body: formData.postBody,
                        iamge: image,
                        subreddit_id: getSubredditListByTopic[0].id,
                        title: formData.postTitle,
                        username: session?.user?.name,
                    },
                })
                console.log('New Post added: ', newPost)
            }
        } catch (error) {}
    })

    return (
        <form
            onSubmit={onSubmit}
            className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2"
        >
            <div className="flex items-center space-x-2">
                {/* Avatar */}
                <Avatar />
                {/* Input Box */}
                <input
                    {...register('postTitle', { required: true })}
                    className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
                    type="text"
                    disabled={!session}
                    placeholder={
                        session ? 'Create a Post!' : 'Sign In to create a post'
                    }
                />
                <PhotographIcon
                    onClick={() => setImageBoxOpen(!imageBoxOpen)}
                    className={`h-6 cursor-pointer text-gray-300 ${
                        imageBoxOpen && 'text-blue-300'
                    }`}
                />
                <LinkIcon className={`h-6 cursor-pointer text-gray-300`} />
            </div>
            {!!watch(`postTitle`) && (
                <div className="flex flex-col py-2">
                    {/* Body */}
                    <div className="flex items-center px-2">
                        <p className="min-w-[90px]">Body</p>
                        <input
                            className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                            {...register('postBody')}
                            type="text"
                            placeholder="Text (optional)"
                        />
                    </div>
                    {/* Subreddit */}
                    <div className="flex items-center px-2">
                        <p className="min-w-[90px]">Subreddit</p>
                        <input
                            className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                            {...register('subreddit', { required: true })}
                            type="text"
                            placeholder="i.e. reactjs"
                        />
                    </div>

                    {imageBoxOpen && (
                        <div className="flex items-center px-2">
                            <p className="min-w-[90px]">Image URL:</p>
                            <input
                                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                                {...register('postImage')}
                                type="text"
                                placeholder="Optional"
                            />
                        </div>
                    )}

                    {/* Errors */}
                    {Object.keys(errors).length > 0 && (
                        <div className="space-y-2 p-2 text-red-300">
                            {errors.postTitle?.type === 'required' && (
                                <p>Post Title is Required</p>
                            )}

                            {errors.subreddit?.type === 'required' && (
                                <p>Subreddit is Required</p>
                            )}
                        </div>
                    )}
                    {!!watch('postTitle') && (
                        <button
                            type="submit"
                            className="w-full rounded-full bg-blue-400 p-2 text-white"
                        >
                            Create Post
                        </button>
                    )}
                </div>
            )}
        </form>
    )
}

export default PostBox