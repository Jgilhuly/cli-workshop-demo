'use client'

import { useAuth } from '@/contexts/AuthContext'
import { LoginForm } from '@/components/auth/LoginForm'
import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm />
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome to IT Service Desk</h1>
          <p className="text-gray-600 mt-2">
            Manage tickets, assets, and software licenses efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tickets</CardTitle>
              <CardDescription>Create and manage support tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tickets">
                <Button className="w-full">View Tickets</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assets</CardTitle>
              <CardDescription>Track hardware and equipment</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/assets">
                <Button className="w-full">View Assets</Button>
              </Link>
            </CardContent>
          </Card>

          {user.role === 'ADMIN' && (
            <Card>
              <CardHeader>
                <CardTitle>Users</CardTitle>
                <CardDescription>Manage user accounts and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/users">
                  <Button className="w-full">Manage Users</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  )
}
