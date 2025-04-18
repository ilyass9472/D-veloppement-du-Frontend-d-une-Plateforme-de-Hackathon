'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const user = token ? JSON.parse(token) : null

    if (!user || user.role !== 'admin') {
      router.push('/login')
    }
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>
    </div>
  )
}
