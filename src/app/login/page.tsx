'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Mock authentication
      if (email === 'admin@hack.com') {
        localStorage.setItem('token', JSON.stringify({ role: 'admin' }))
        router.push('/admin')
      } else if (email === 'jury@hack.com') {
        localStorage.setItem('token', JSON.stringify({ role: 'jury' }))
        router.push('/jury') 
      } else if (email === 'user@hack.com') {
        localStorage.setItem('token', JSON.stringify({ role: 'participant' }))
        router.push('/participant')
      } else {
        setError("Invalid credentials")
      }
    } catch (err) {
      setError("An error occurred during login")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input
          type="email"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
        <input
          type="password"
          className="w-full mb-3 p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
        {error && <p className="text-red-500 text-sm mb-2" role="alert">{error}</p>}
        <button 
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </form>
    </div>
  )
}