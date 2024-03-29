import { gql } from '@apollo/client'

export const ADD_POST = gql`
    mutation Mutation(
        $body: String!
        $image: String!
        $subreddit_id: ID!
        $title: String!
        $username: String!
    ) {
        insertPost(
            body: $body
            image: $image
            subreddit_id: $subreddit_id
            title: $title
            username: $username
        ) {
            body
            created_at
            image
            subreddit_id
            title
            username
        }
    }
`

export const ADD_SUBREDDIT = gql`
    mutation Mutation($topic: String!) {
        insertSubreddit(topic: $topic) {
            id
            topic
            created_at
        }
    }
`

export const DELETE_POST_BY_POST_ID = gql`
    mutation Mutation($post_id: ID!) {
        insertSubreddit(post_id: $post_id) {
            id
            title
            created_at
            username
        }
    }
`

export const ADD_VOTE = gql`
    mutation Mutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
        insertVote(post_id: $post_id, username: $username, upvote: $upvote) {
            id
            post_id
            upvote
            username
            created_at
        }
    }
`

export const ADD_COMMENT = gql`
    mutation Mutation($post_id: ID!, $username: String!, $text: String!) {
        insertComment(post_id: $post_id, username: $username, text: $text) {
            created_at
            id
            post_id
            text
            username
        }
    }
`
