import { gql } from '@apollo/client';
export const GET_PEOPLE = gql`
query {
    persons {
      id
      name
      amount
      request
    }
  }`;

  export const CREATE_PERSON = gql`
  mutation CreatePerson($request: String!, $amount: Int!, $name: String!) {
    createPerson(request: $request, amount: $amount, name: $name) 
  }
`;
export const UPDATE_USER = gql`
  mutation updatePerson($request: String!, $amount: Int!, $name: String!,$id: Int!) {
    updatePerson( request: $request, amount: $amount, name: $name,id: $id) 
  }
`;
 
export const DELETEUSER = gql`
  mutation DeletePerson($id: Int!) {
    DeletePerson(id: $id)
  }
`;