'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Login() {
  // Get session
  const { data: session } = useSession()

  if (session) {
    // User Exists
    return (
      <button onClick={() => signOut()} type="button">
        Sign Out Of Google
      </button>
      // Pass session info to server component here
    )
  } else {
    // User does not exist
    return (
      <button onClick={() => signIn()} type="button">
        Sign Into Google
      </button>
    )
  }
}
