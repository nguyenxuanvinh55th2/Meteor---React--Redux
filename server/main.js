import { Meteor } from 'meteor/meteor';
import '../imports/api/task.js';
import '../imports/api/Collections.js';
import { createApolloServer } from 'meteor/apollo';

import schema from '../imports/api/schema';
import {resolvers} from '../imports/api/resolvers';

createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
  resolvers,
});
