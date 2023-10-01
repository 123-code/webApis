"use client";
import { useState } from 'react';
import Image from 'next/image'

import { useQuery, useMutation } from '@apollo/react-hooks';
import {GET_PEOPLE,CREATE_PERSON,UPDATEUSER,DELETEUSER} from '../graphql/queries';




export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    request: '',
    amount: 0 
  });
  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {request,amount,name } = formData;
    try {
      const result = await createUser({
        variables: {request,amount,name}
      });
      console.log('Mutation Result:', result);
    } catch (err) {
      console.error('Mutation Error:', err);
    }
  }

  const {data,loading, error } = useQuery(GET_PEOPLE);
  const [createUser] = useMutation(CREATE_PERSON);
  //createUser().catch(err => console.log(err))

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
    value={formData.name}
    onChange={handleChange}
    placeholder="Name" 
  />

  <input
    name="request"
    className="block w-full bg-gray-800 p-2 mb-4 rounded"
    value={formData.request}
    onChange={handleChange}
    placeholder="Request"
  />  

  <input
    name="amount" 
    className="block w-full bg-gray-800 p-2 mb-4 rounded"
    value={formData.amount}
    onChange={handleChange}
    placeholder="Amount"
  />

  <button 
    type="submit"
    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
    onClick={handleSubmit}
  >
    Create User
  </button>

</form>
</div>

      </div>
    </main>
  )

}