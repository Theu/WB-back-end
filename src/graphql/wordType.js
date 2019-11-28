const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const wordType = new GraphQLObjectType({
    name: 'word',
    fields: () => ({
        word: { type: GraphQLString },
        gender: { type: GraphQLString },
        plural: { type: GraphQLString },
        function: { type: GraphQLString },
        translation: { type: GraphQLString },
        article: { type: GraphQLString }
    })
});

module.exports = wordType;
