"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface User {
    picture: string;
    name: string;
}

export default function Profile() {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch('http://localhost:8080/google/callback')
            const data = await res.json()
            console.log("datos",data)
            // Parse JWT from first response
            const jwt = await res.text()

            // Set user state from second response
            setUser(data)
        }

        fetchUser()
    }, [])

    return (
        <div>

            <Image
                src={user?.picture || ''}
                width={500}
                height={500}
                alt="Picture of the user"
            />

            <h1>{user?.name}.</h1>
        </div>
    )
}

  