'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TicketIcon, ComputerIcon, UsersIcon } from 'lucide-react'
import { CreateTicketDialog } from '@/components/tickets/CreateTicketDialog'
import { CreateAssetDialog } from '@/components/assets/CreateAssetDialog'
import { CreateUserDialog } from '@/components/users/CreateUserDialog'

export function QuickActions() {
  const { user } = useAuth()
  const [ticketDialogOpen, setTicketDialogOpen] = useState(false)
  const [assetDialogOpen, setAssetDialogOpen] = useState(false)
  const [userDialogOpen, setUserDialogOpen] = useState(false)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              onClick={() => setTicketDialogOpen(true)}
              className="h-auto p-4 flex flex-col items-center space-y-2"
            >
              <TicketIcon className="h-6 w-6" />
              <span>Create Ticket</span>
            </Button>
            
            <Button 
              onClick={() => setAssetDialogOpen(true)}
              className="h-auto p-4 flex flex-col items-center space-y-2"
            >
              <ComputerIcon className="h-6 w-6" />
              <span>Add Asset</span>
            </Button>
            
            {user?.role === 'ADMIN' && (
              <Button 
                onClick={() => setUserDialogOpen(true)}
                className="h-auto p-4 flex flex-col items-center space-y-2"
              >
                <UsersIcon className="h-6 w-6" />
                <span>Add User</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <CreateTicketDialog 
        open={ticketDialogOpen} 
        onOpenChange={setTicketDialogOpen} 
      />
      
      <CreateAssetDialog 
        open={assetDialogOpen} 
        onOpenChange={setAssetDialogOpen} 
      />
      
      <CreateUserDialog 
        open={userDialogOpen} 
        onOpenChange={setUserDialogOpen} 
      />
    </>
  )
}
