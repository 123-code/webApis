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
  mutation updatePerson($id: Int!, $request: String!, $amount: Int!, $name: String!) {
    updatePerson(id: $id, request: $request, amount: $amount, name: $name) 
  }
`;
 
export const DELETEUSER = gql`
  mutation DeletePerson($id: Int!) {
    DeletePerson(id: $id)
  }
`;