"use client";
import { useState } from 'react';
import { UPDATE_USER } from '../graphql/queries';
import {  useMutation } from '@apollo/react-hooks';
export default function UpdateForm() {
    const [updateUser] = useMutation(UPDATE_USER);
    const [formData, setFormData] = useState({
        name: '',
        amount: 0,
        request: '',
        id: ''
      });


      const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,amount,request,id } = formData;
        console.log(formData)
        try {
          const result = await updateUser({
            variables: {name,amount,request,id}
          });
          console.log('Mutation Result:', result);
        } catch (err) {
          console.error('Mutation Error:', err);
       
        }
      }


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          
          [name]: name === 'amount' || name==='id' ? parseInt(value, 10) : value, // Parse amount as an integer
           
        });
      }


      return(

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


<input 
  name="id"
  value={formData.id}
  onChange={handleChange}
  placeholder="Enter ID" 
/>
  
    <button 
      type="submit"
      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
      onClick={handleSubmit}
    >
      Update User
    </button>
  
  </form>
      )
}