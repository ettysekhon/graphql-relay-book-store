const {
  nodeDefinitions,
  fromGlobalId,
} = require('graphql-relay');

const { getAuthorById } = require('./data');
const { types } = require('./index');

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    return getObjectById(type.toLowerCase(), id);
  },
  (object) => {
    return types.authorType;
  }
);

module.exports = {
  nodeField,
  nodeInterface,
};
