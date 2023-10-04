// components/GoogleSignInButton.tsx 

import { FcGoogle } from 'react-icons/fc'

interface Props { 
  onClick: () => void
}

export default function GoogleSignInButton({ onClick }: Props) {
  return (
    <button 
      className="bg-white flex items-center rounded-full border border-gray-300 px-4 py-2 space-x-2 hover:bg-gray-100"
      onClick={onClick}
    >
      <FcGoogle className="h-6 w-6" /> 
      <span>Sign in with Google</span>
    </button>
  )
}