'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { notifications, NOTIFICATION_MESSAGES } from '@/lib/notifications'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const loadingToast = notifications.loading('Signing in...')

    try {
      const success = await login(email, password)
      notifications.dismiss(loadingToast)
      
      if (success) {
        notifications.success(NOTIFICATION_MESSAGES.LOGIN_SUCCESS, 'Welcome back!')
      } else {
        setError('Invalid email or password')
        notifications.error(NOTIFICATION_MESSAGES.LOGIN_ERROR, 'Please check your credentials and try again')
      }
    } catch {
      notifications.dismiss(loadingToast)
      const errorMessage = 'An error occurred during login'
      setError(errorMessage)
      notifications.error('Login failed', errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">IT Service Desk</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center mb-2">Demo Credentials:</p>
            <div className="text-xs text-gray-500 space-y-1">
              <p><strong>End User:</strong> user@company.com / password123</p>
              <p><strong>Admin:</strong> admin@company.com / admin123</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
