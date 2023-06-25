import { gql } from '@apollo/client';

export const GET_BLOG = gql`
    query getBlog {
        blog {
        _id
        name
        img
        des
        details
        }
    }
`;

export const GET_BLOG_BY_ID = gql`
    query blogById($blogid: ID!) {
        blogById(_id: $blogid) {
        _id
        name
        img
        des
        details
        }
    }
`;