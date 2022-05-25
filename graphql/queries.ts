import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
    query Query {
        getPostList {
            body
            created_at
            image
            id
            title
            username
            subreddit_id
            comments {
                created_at
                id
                post_id
                text
                username
            }
            subreddit {
                created_at
                id
                topic
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
    query Query($topic: String!) {
        getPostListByTopic(topic: $topic) {
            body
            created_at
            image
            id
            title
            username
            subreddit_id
            comments {
                created_at
                id
                post_id
                text
                username
            }
            subreddit {
                created_at
                id
                topic
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`
export const GET_POST_BY_POST_ID = gql`
    query Query($post_id: ID!) {
        getPostByPostId(post_id: $post_id) {
            body
            created_at
            image
            id
            title
            username
            subreddit_id
            comments {
                created_at
                id
                post_id
                text
                username
            }
            subreddit {
                created_at
                id
                topic
            }
            votes {
                created_at
                id
                post_id
                upvote
                username
            }
        }
    }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
    query Query($post_id: ID!) {
        getVotesByPost_id(post_id: $post_id) {
            created_at
            id
            post_id
            upvote
            username
        }
    }
`

export const GET_SUBREDDITS_WITH_LIMIT = gql`
    query Query($limit: Int!) {
        getSubredditListLimit(limit: $limit) {
            id
            topic
            created_at
        }
    }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query Query($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`

export const GET_COMMENT_BY_POST_ID = gql`
    query Query($post_id: String!) {
        getCommentByPost_id(post_id: $post_id) {
            created_at
            id
            post_id
            text
            username
        }
    }
`
