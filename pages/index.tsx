import { useQuery } from '@apollo/client'
import { Jelly } from '@uiball/loaders'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
import SubredditRow from '../components/SubredditRow'
import { GET_ALL_POSTS, GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'

const Home: NextPage = () => {
    const { data: subredditData } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
        variables: {
            limit: 10,
        },
    })

    const { data: postData } = useQuery(GET_ALL_POSTS)

    const subreddits: Subreddit[] = subredditData?.getSubredditListLimit
    const posts: Post[] = postData?.getPostList

    if (!posts)
        return (
            <div className="flex w-full items-center justify-center p-10 text-xl">
                <Jelly size={50} color="#FF4501" />
            </div>
        )

    return (
        <div className="my-5 mx-auto max-w-5xl">
            <Head>
                <title>Create Next App</title>
            </Head>

            <PostBox />
            {/* Feed */}

<<<<<<< HEAD
            <div className="flex justify-between">
                {posts?.length > 0 ? (
                    <Feed />
                ) : (
                    <div className="flex min-h-[300px] w-full items-center justify-center text-2xl font-bold">
                        <h1>No Post Yet</h1>
                    </div>
                )}
=======
            <div className="flex justify-between space-x-4">
                {posts?.length > 0 && <Feed />}
>>>>>>> 50eaa988cce46d915ac414cfd01121d405e4b0ae

                {subreddits?.length > 0 && (
                    <div className="sticky top-40 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
                        <p className="text-md mb-1 p-4 pb-3 font-bold">
                            Top Communities
                        </p>
                        <div>
                            {subreddits?.map((subreddit, index) => (
                                <SubredditRow
                                    key={subreddit.id}
                                    index={index}
                                    topic={subreddit.topic}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home
