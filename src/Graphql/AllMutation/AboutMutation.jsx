import { gql } from '@apollo/client';

export const CREATE_ABOUT = gql`
mutation createNewAbout($input: AboutInput!) {
  create_about(input: $input) {
    _id
    name
    file 
    des1
    des2
    title
  }
}
  
`;

export const CREATE_ICON = gql`
    mutation createNewIcon($createIcon: createIcon!) {
        create_icon(CreateIcon: $createIcon) {
        _id
        name
        iconLink
        }
    }
`;

export const DELETE_ICON = gql`
    mutation deleteSocialIcon($id: ID!) {
      deleteSocialIcon(_id: $id) {
        _id
        name
        iconLink
      }
    }
`;