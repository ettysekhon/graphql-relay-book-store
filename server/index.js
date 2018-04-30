const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

const {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

const {
  globalIdField,
  connectionDefinitions,
  connectionFromPromisedArray,
  connectionArgs,
  mutationWithClientMutationId,
} = require('graphql-relay');

const {
  getAuthors,
  getAuthorById,
  createAuthor
} = require('./data');

const { nodeInterface, nodeField } = require('./node');

const PORT = process.env.PORT || 3001;
const server = express();

const authorType = new GraphQLObjectType({
  name: 'Author',
  description: 'An author',
  fields: {
    id: globalIdField(),
    first_name: {
      type: GraphQLString,
      description: 'The first name of the author.',
    },
    last_name: {
      type: GraphQLString,
      description: 'The last name of the author.',
    },
    email: {
      type: GraphQLInt,
      description: 'The email address of the author.',
    },
  },
  interfaces: [nodeInterface],
});

const { connectionType: AuthorConnection } = connectionDefinitions({
  nodeType: authorType,
  connectionFields: () => ({
    count: {
      type: GraphQLInt,
      description: 'A count of the total number of objects in this connection.',
      resolve: (conn) => {
        return conn.edges.length;
      },
    },
  }),
});

const queryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type.',
  fields: {
    node: nodeField,
    authors: {
      type: AuthorConnection,
      args: connectionArgs,
      resolve: (_, args) => connectionFromPromisedArray(
        getAuthors(),
        args
      ),
    },
    author: {
      type: authorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: 'The id of the author.',
        },
      },
      resolve: (_, args) => {
        return getAuthorById(parseInt(args.id, 10));
      },
    },
  },
});

const authorMutation = mutationWithClientMutationId({
  name: 'AddAuthor',
  inputFields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The first name of the author.',
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The last name of the author.',
    },
    email: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'The email address of the author.',
    },
  },
  outputFields: {
    author: {
      type: authorType,
    },
  },
  mutateAndGetPayload: (args) => new Promise((resolve, reject) => (
    Promise.resolve(createAuthor(args))
      .then((author) => resolve({ author }))
      .catch(reject)
  )),
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root Mutation type.',
  fields: {
    createAuthor: authorMutation,
  },
});

const schema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});

exports.types = {
  authorType,
};

server.use(cors());

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
