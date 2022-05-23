import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
    return (
        <div className="my-5 mx-auto max-w-5xl">
            <Head>
                <title>Create Next App</title>
            </Head>

            {/* Postbox */}
            <PostBox />
            {/* Feed */}
        </div>
    )
}

export default Home
