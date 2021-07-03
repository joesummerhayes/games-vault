import { buildSchema } from 'graphql';
import inputData from './inputData';
import types from './types';
import mutations from './mutations';
import queries from './queries';

export default buildSchema(`
  ${types}
  ${inputData}
  ${queries}
  ${mutations}
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
