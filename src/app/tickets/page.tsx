import { MainLayout } from '@/components/layout/MainLayout'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { TicketList } from '@/components/tickets/TicketList'
import { CreateTicketButton } from '@/components/tickets/CreateTicketButton'

export default function TicketsPage() {
  return (
    <ProtectedRoute>
      <MainLayout>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Tickets</h1>
              <p className="text-gray-600 mt-2">
                Manage support tickets and requests
              </p>
            </div>
            <CreateTicketButton />
          </div>
          
          <TicketList />
        </div>
      </MainLayout>
    </ProtectedRoute>
  )
}
