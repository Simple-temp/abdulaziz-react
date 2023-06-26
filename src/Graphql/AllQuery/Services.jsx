import { gql } from '@apollo/client';

export const GET_SERVICES = gql`
    query getServices {
        services {
        _id
        name
        category
        stock
        des
        qty
        rating
        price
        img
        }
    }
`;

export const GET_SERVICES_BY_ID = gql`
    query servicesById($servicesid: ID!) {
        servicesById(_id: $servicesid) {
        _id
        name
        category
        stock
        des
        qty
        rating
        price
        img
        }
    }
`;