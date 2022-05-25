import Image from 'next/image'
import React from 'react'
import RedditLogo from '../public/redditlogo.png'
import RedditMark from '../public/redditmark.png'
import {
    ChevronDownIcon,
    HomeIcon,
    SearchIcon,
    MenuIcon,
} from '@heroicons/react/solid'
import {
    StarIcon,
    BellIcon,
    ChatIcon,
    GlobeIcon,
    PlusIcon,
    SparklesIcon,
    SpeakerphoneIcon,
    VideoCameraIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

function Header() {
    const { data: session } = useSession()

    return (
        <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
            <div className="relative h-10 w-24 flex-shrink-0 cursor-pointer">
                <Link href="/">
                    <a>
                        <Image
                            src={RedditLogo}
                            layout="fill"
                            objectFit="contain"
                            alt="reddit logo"
                        />
                    </a>
                </Link>
            </div>

            <div className="mx-7 flex items-center xl:min-w-[300px]">
                <HomeIcon className="h-5 w-5" />
                <p className="ml-2 hidden flex-1 lg:inline">Home</p>
                <ChevronDownIcon className="h-5 w-5" />
            </div>

            {/* Search */}
            <form className="flex flex-1 items-center space-x-2 rounded-md border border-gray-200 bg-gray-100 py-1 px-3">
                <SearchIcon className="h-6 w-6 text-gray-400" />
                <input
                    placeholder="Search Reddit"
                    className="flex-1 bg-transparent outline-none"
                ></input>
                <button type="submit" hidden />
            </form>

            <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
                <SparklesIcon className="icon" />
                <GlobeIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className="h-10 border border-gray-100" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <SpeakerphoneIcon className="icon" />
            </div>

            {/* Signin Signout Button */}
            {session ? (
                <div
                    onClick={() => signOut()}
                    className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
                >
                    <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                            layout="fill"
                            src={RedditMark}
                            objectFit="contain"
                            alt="reddit mark"
                        />
                    </div>
                    <div className="flex-1 text-sm">
                        <p className="truncate">{session?.user?.name}</p>
                        <p className="text-gray-400">1 Karma</p>
                    </div>
                </div>
            ) : (
                <div
                    onClick={() => signIn()}
                    className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
                >
                    <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                            layout="fill"
                            src={RedditMark}
                            objectFit="contain"
                            alt="reddit mark"
                        />
                    </div>

                    <p className="text-gray-400">Sign In</p>
                </div>
            )}

            <div className="ml-5 flex items-center lg:hidden">
                <MenuIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
