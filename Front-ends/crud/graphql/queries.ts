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
  export const UPDATEUSER = gql `mutation{
    updatePerson(request:"ai sound",amount:20000,name:"josei",id:1)
  }`;

  
  export const DELETEUSER = gql `mutation {DeletePerson(id:1)}`;