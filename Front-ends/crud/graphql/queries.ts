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

  export const CREATEUSER = gql`mutation($name: String!, $request: String!, $amount: Int!) {
    createPerson(amount: $amount, name: $name, request: $request)
    }`;
  
  export const UPDATEUSER = gql `mutation{
    updatePerson(request:"ai sound",amount:20000,name:"josei",id:1)
  }`;

  
  export const DELETEUSER = gql `mutation {DeletePerson(id:1)}`;