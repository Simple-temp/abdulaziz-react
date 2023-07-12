import { gql } from '@apollo/client';

export const DELETE_PORTFOLIO = gql`

    mutation deletePortfolio($portfolioid: ID!) {
        delete_portfolio(_id: $portfolioid) {
        _id
        }
    }

`;









