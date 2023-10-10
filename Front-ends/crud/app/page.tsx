// components/GoogleSignInButton.tsx 
"use client"
import { FcGoogle } from 'react-icons/fc'

interface Props { 
  onClick: () => void
}

export default function GoogleSignInButton({ }: Props) {

  const loginWithGoogle = () => {
    const googleOAuthURL = `http://localhost:8080/google/login`

    window.location.href = googleOAuthURL
  }
  return (
    <>
   
   <div className="flex flex-col items-center justify-center h-screen">
   <div className=" text-white text-headers text-xl font-bold mb-2">
        Bienvenid@
      </div>
      <div className="text-headers text-xl font-bold mb-2">
        Ingresa con:
      </div>
      <div className="p-4 bg-gray-800 rounded-lg max-w-sm msx-h-sm mb-4">
      <div className="text-headers text-xl font-bold mb-2">
        Google
      </div>
      <button
        className="bg-white flex items-center rounded-full border border-gray-300 px-4 py-2 space-x-2 hover:bg-gray-100"
        onClick={loginWithGoogle}  
      >
        <FcGoogle className="h-6 w-6" />
        <span className="text-blue-600 bg-white rounded-full p-1">
          Sign in with Google
        </span>
      </button>
      </div>
    </div>
    </>
   
    
  )
}