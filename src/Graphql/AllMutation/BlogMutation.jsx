import { gql } from '@apollo/client';

export const CREATE_BLOG = gql`
    mutation newBlog ($blogInputInfo : BlogInputCreate){
        create_blog (input : $blogInputInfo) {
        _id
        name
        img
        des
        details
        }
    }

`;

export const DELETE_BLOG = gql`
    mutation deleteBlog( $blogid : ID){
        delete_blog( _id : $blogid){
        _id
        name
        img
        des
        details
        }
    }
  
`;

export const UPDATE_BLOG = gql`
    mutation updateBlog ( $blogUpdateInfo : BlogInputUpdate) {
        update_blog ( input : $blogUpdateInfo){
        _id
        name
        img
        des
        details
        }
    }
  
`;