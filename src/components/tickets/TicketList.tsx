'use client'

import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { PRIORITIES, TICKET_STATUSES } from '@/lib/constants'
import { getTickets, updateTicketStatus, assignTicket } from '@/lib/actions/tickets'
import { formatDistanceToNow } from 'date-fns'

interface Ticket {
  id: string
  title: string
  description: string
  priority: string
  category: string
  status: string
  createdAt: Date
  user: { id: string; name: string; email: string }
  assignedUser?: { id: string; name: string; email: string }
}

export function TicketList() {
  const { user } = useAuth()
  const [tickets, setTickets] = useState<Ticket[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadTickets = useCallback(async () => {
    if (!user) return
    
    try {
      const ticketData = await getTickets(user.id, user.role)
      setTickets(ticketData)
    } catch (error) {
      console.error('Failed to load tickets:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      loadTickets()
    }
  }, [user, loadTickets])

  const handleStatusChange = async (ticketId: string, newStatus: string) => {
    try {
      await updateTicketStatus(ticketId, newStatus)
      await loadTickets()
    } catch (error) {
      console.error('Failed to update ticket status:', error)
    }
  }

  const handleAssignment = async (ticketId: string, assignedTo: string) => {
    try {
      await assignTicket(ticketId, assignedTo)
      await loadTickets()
    } catch (error) {
      console.error('Failed to assign ticket:', error)
    }
  }

  const getPriorityColor = (priority: string) => {
    const priorityData = PRIORITIES.find(p => p.value === priority)
    return priorityData?.color || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status: string) => {
    const statusData = TICKET_STATUSES.find(s => s.value === status)
    return statusData?.color || 'bg-gray-100 text-gray-800'
  }

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-gray-500">Loading tickets...</div>
        </CardContent>
      </Card>
    )
  }

  if (tickets.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-gray-500">
            No tickets found. Create your first ticket to get started.
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <Card key={ticket.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle className="text-lg">{ticket.title}</CardTitle>
                <CardDescription className="text-sm">
                  {ticket.description.length > 100 
                    ? `${ticket.description.substring(0, 100)}...` 
                    : ticket.description
                  }
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className={getPriorityColor(ticket.priority)}>
                  {PRIORITIES.find(p => p.value === ticket.priority)?.label || ticket.priority}
                </Badge>
                <Badge className={getStatusColor(ticket.status)}>
                  {TICKET_STATUSES.find(s => s.value === ticket.status)?.label || ticket.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span> {ticket.category}
              </div>
              <div>
                <span className="font-medium">Created:</span> {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
              </div>
              <div>
                <span className="font-medium">By:</span> {ticket.user.name}
              </div>
            </div>
            
            {user?.role === 'ADMIN' && (
              <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <Select 
                    value={ticket.status} 
                    onValueChange={(value) => handleStatusChange(ticket.id, value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TICKET_STATUSES.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium">Assign To</label>
                  <Select 
                    value={ticket.assignedUser?.id || 'unassigned'} 
                    onValueChange={(value) => handleAssignment(ticket.id, value === 'unassigned' ? '' : value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Unassigned" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unassigned">Unassigned</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
