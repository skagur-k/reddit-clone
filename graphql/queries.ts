import { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query Query($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`
