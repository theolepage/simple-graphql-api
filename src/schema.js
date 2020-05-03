const { gql } = require('apollo-server');

const typeDefs = gql`
    type Ship {
        name: String
        sailor: Sailor
    }

    type Sailor {
        name: String
        nationality: String
    }

    type Query {
        ships: [Ship]!
        ship(name: String!): Ship
    }
`;

module.exports = typeDefs;
