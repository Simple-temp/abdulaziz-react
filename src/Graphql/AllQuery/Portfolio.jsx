import { gql } from '@apollo/client';

export const GET_PORTFOLIO = gql`

    query getPortfolio {
        portfolio {
        _id
        name
        category
        des
        img
        live
        fontCode
        backCode
        }
    }

`;

export const GET_PORTFOLIO_BY_ID = gql`

    query portfolioById($portfolioid: ID!) {
        portfolioById(_id: $portfolioid) {
        _id
        name
        category
        des
        img
        live
        fontCode
        backCode
        }
    }

`;
