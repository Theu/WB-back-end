const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const wordGraphQLType =  require('./wordType');
const word = require('../dbModels/words');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        word: {
            type: wordGraphQLType,
        args: { id: { type: GraphQLString }},
        resolve(parent, args) {
            return word.findById(args.id)
        } 
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
  });
