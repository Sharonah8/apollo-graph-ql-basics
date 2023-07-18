const gql = require("graphql-tag");

// type definitions. Assigned to gql where our definitions will go
const typeDefs = gql`
    type Query{
        "Query to get tracks for the homepage grid"
        tracksForHome: [Track!]!
    }
"A track is a group of Modules that teaches about a specific topic"
type Track{
    "the track's ID"
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration, url, to display in track or track page detail"
    thumbnail: String
    "the track's approximate length t complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
}
"Author of a complete Track"
type Author{
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
}
`;

// export typeDefs since we'll need it for our server later on
module.exports = typeDefs;