"use client";
import Image from 'next/image'
import { useQuery, useMutation } from '@apollo/react-hooks';
import {GET_PEOPLE,CREATEUSER,UPDATEUSER,DELETEUSER} from '../graphql/queries';




export default function Home() {

  const {data,loading, error } = useQuery(GET_PEOPLE);

 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  console.log(error); 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Hola</h1>
        
        <div>
      {data.persons.map(person => (
        <div key={person.id}>
          <p>{person.name}</p> 
        </div>
      ))}
    </div>

      </div>
    </main>
  )

}