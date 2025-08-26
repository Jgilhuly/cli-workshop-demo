import { MainLayout } from '@/components/layout/MainLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { DashboardStats } from '@/components/dashboard/DashboardStats'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { RecentTickets } from '@/components/dashboard/RecentTickets'

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Overview of your IT service desk operations
            </p>
          </div>

          <DashboardStats />
          <QuickActions />
          <RecentTickets />
        </div>
      </MainLayout>
    </ProtectedRoute>
  )
}
