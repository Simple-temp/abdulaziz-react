import { gql } from '@apollo/client';

export const DELETE_SERVICES = gql`
    mutation deleteServices ( $servicesid : ID){
        delete_services ( _id : $servicesid){
        _id
        }
    }

`;