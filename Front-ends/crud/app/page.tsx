"use client";
import { useState } from 'react';
import Image from 'next/image'

import { useQuery, useMutation } from '@apollo/react-hooks';
import {GET_PEOPLE,CREATE_PERSON,UPDATEUSER,DELETEUSER} from '../graphql/queries';


 

export default function Home() {

  const [formData, setFormData] = useState({
    name: '',
    amount: 0,
    request: '' 
  });


  const [name,setname] = useState("");
  const [amount,setamount] = useState(0);
  const [request,setrequest] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseInt(value, 10) : value, // Parse amount as an integer
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,amount,request } = formData;
    console.log(formData)
    try {
      const result = await createUser({
        variables: {name,amount,request}
      });
      console.log('Mutation Result:', result);
    } catch (err) {
      console.error('Mutation Error:', err);
   
    }
  }


  const TrashbuttonClick = (id)=>{
    console.log("trash button clicked");
    deleteUser({
      variables: { id }
    })

  }

  const UpdatebuttonClick = (id)=>{
    console.log("Update button clicked");
    updateUser({
      variables: { id }
    })
  }




  const {data,loading, error } = useQuery(GET_PEOPLE);
  const [createUser] = useMutation(CREATE_PERSON);
  const [deleteUser] = useMutation(DELETEUSER);
  const [updateUser] = useMutation(UPDATEUSER);
  //createUser().catch(err => console.log(err))

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  console.log(error); 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>TakeOff</h1>
        
        <div   >
        {data.persons.map(person => (

<div key={person.id} className="p-4 bg-gray-800 rounded-lg max-w-sm mb-4">

  <div className="text-white">
    <h3 className="text-2xl font-bold mb-2">
      {person.name}  
    </h3>

    <p className="text-gray-400 text-sm">
      <span className="font-bold">Request:</span> {person.request}
    </p>

    <p className="text-gray-400 text-sm">  
      <span className="font-bold">Amount:</span> {person.amount}
    </p>

  </div>
  <button
  type="button" 
  className="bg-red-500 hover:bg-red-600 text-white px-2 py-2 rounded"
  onClick={() => TrashbuttonClick(person.id)}
>
  Delete User 
</button>

<button
  type="button" 
  className="bg-orange-500 hover:bg-blue-600 text-white px-2 py-2 rounded ml-3"
  onClick={() => UpdatebuttonClick(person.id)}
>
  Update User
</button>
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