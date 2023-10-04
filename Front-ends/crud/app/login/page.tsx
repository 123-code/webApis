// components/GoogleSignInButton.tsx 

import { FcGoogle } from 'react-icons/fc'

interface Props { 
  onClick: () => void
}

export default function GoogleSignInButton({ onClick }: Props) {
  return (
    <>
   
   <div className="flex flex-col items-center justify-center h-screen">
      
      <div className="text-white font-mono mb-3">
        Ingresa con Google
      </div>
      
      <button
        className="bg-white flex items-center rounded-full border border-gray-300 px-4 py-2 space-x-2 hover:bg-gray-100"
        onClick={onClick}  
      >
        <FcGoogle className="h-6 w-6" />
        <span className="text-blue-600 bg-white rounded-full p-1">
          Sign in with Google
        </span>
      </button>

    </div>
    </>
   
    
  )
}