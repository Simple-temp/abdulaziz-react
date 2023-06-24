import { gql } from '@apollo/client';

export const GET_ABOUT = gql`
    query getAbout {
        about {
        _id
        name
        des1
        des2
        file
        title
        }
    }
`;

export const GET_ICON = gql`
    query getIcon{
        SocailIcon {
        _id
        name
        iconLink
        }
    }
    
`;