import { gql } from '@apollo/client'

export const ADD_POST = gql`
    mutation Mutation(
        $body: String!
        $image: String!
        $subrredit_id: ID!
        $title: String!
        $username: String!
    ) {
        insertPost(
            body: $body
            image: $image
            subreddit_id: $subrredit_id
            title: $title
            username: $username
        ) {
            body
            created_at
            IDimage
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
