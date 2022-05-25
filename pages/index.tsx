import { useQuery } from '@apollo/client'
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

    return (
        <div className="my-5 mx-auto max-w-5xl">
            <Head>
                <title>Create Next App</title>
            </Head>

            <PostBox />
            {/* Feed */}

            <div className="flex">
                {posts?.length > 0 && <Feed />}

                {subreddits?.length > 0 && (
                    <div className="sticky top-40 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
                        <p className="text-md mb-1 p-4 pb-3 font-bold">
                            Top Communities
                        </p>
                        <div>
                            {subreddits?.map((subreddit, index) => (
                                <SubredditRow
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
