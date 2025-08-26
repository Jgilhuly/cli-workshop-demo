'use client'

import { useAuth } from '@/contexts/AuthContext'
import { ReactNode } from 'react'

interface ProtectedRouteProps {
  children: ReactNode
  requiredRole?: 'END_USER' | 'ADMIN'
  fallback?: ReactNode
}

export function ProtectedRoute({ children, requiredRole, fallback }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Please log in to continue</div>
      </div>
    )
  }

  if (requiredRole && user.role !== requiredRole) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Access denied. Insufficient permissions.</div>
      </div>
    )
  }

  return <>{children}</>
}
