"use client";
import { useState } from 'react';
import Image from 'next/image'
import { useQuery, useMutation } from '@apollo/react-hooks';
import {GET_PEOPLE,CREATEUSER,UPDATEUSER,DELETEUSER} from '../graphql/queries';




export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
  
    const name = formData.get('name');
    const request = formData.get('request');
    const amount = formData.get('amount');
  
    createUser({
      variables: {
      name,
      request,
      amount
      }
      }); 
  }

  const {data,loading, error } = useQuery(GET_PEOPLE);
  const [createUser] = useMutation(CREATEUSER);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  console.log(error); 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>TakeOff</h1>
        
        <div>
      {data.persons.map(person => (
        <div key={person.id}>
          <p>{person.name}</p> 
          <p>{person.request}</p> 
          <p>{person.amount}</p> 
        </div>
      ))}
    </div>
    <div>

    <form 
  onSubmit={handleSubmit}
  className="bg-gray-900 p-8 rounded-lg"
>

  <input 
    name="name"
    className="block w-full bg-gray-800 p-2 mb-4 rounded" 
    placeholder="Name" 
  />

  <input
    name="request"
    className="block w-full bg-gray-800 p-2 mb-4 rounded"
    placeholder="Request"
  />  

  <input
    name="amount" 
    className="block w-full bg-gray-800 p-2 mb-4 rounded"
    placeholder="Amount"
  />

  <button 
    type="submit"
    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
  >
    Create User
  </button>

</form>
</div>

      </div>
    </main>
  )

}