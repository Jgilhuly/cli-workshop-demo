import { MainLayout } from '@/components/layout/MainLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { UserList } from '@/components/users/UserList'
import { CreateUserButton } from '@/components/users/CreateUserButton'

export default function UsersPage() {
  return (
    <ProtectedRoute requiredRole="ADMIN">
      <MainLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Users</h1>
              <p className="text-gray-600 mt-2">
                Manage user accounts and permissions
              </p>
            </div>
            <CreateUserButton />
          </div>
          
          <UserList />
        </div>
      </MainLayout>
    </ProtectedRoute>
  )
}
