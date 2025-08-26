'use client'

import { useCallback, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getTickets } from '@/lib/actions/tickets'
import { getAssets } from '@/lib/actions/assets'
import { useAuth } from '@/contexts/AuthContext'
import { StatsSkeleton } from '@/components/ui/loading-skeletons'
import { notifications } from '@/lib/notifications'

interface DashboardStatsData {
  totalTickets: number
  openTickets: number
  totalAssets: number
  assignedAssets: number
}

export function DashboardStats() {
  const { user } = useAuth()
  const [stats, setStats] = useState<DashboardStatsData>({
    totalTickets: 0,
    openTickets: 0,
    totalAssets: 0,
    assignedAssets: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const loadStats = useCallback(async () => {
    if (!user) return
    
    try {
      const [tickets, assets] = await Promise.all([
        getTickets(user.id, user.role),
        getAssets(),
      ])

      const openTickets = tickets.filter(ticket => ticket.status === 'OPEN').length
      const assignedAssets = assets.filter(asset => asset.status === 'ASSIGNED').length

      setStats({
        totalTickets: tickets.length,
        openTickets,
        totalAssets: assets.length,
        assignedAssets,
      })
    } catch (error) {
      console.error('Failed to load dashboard stats:', error)
      notifications.error('Failed to load dashboard statistics', 'Please refresh the page to try again')
    } finally {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      loadStats()
    }
  }, [user, loadStats])

  if (isLoading) {
    return <StatsSkeleton count={4} />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalTickets}</div>
          <p className="text-xs text-muted-foreground">
            {stats.totalTickets === 0 ? 'No tickets yet' : `${stats.openTickets} open`}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.openTickets}</div>
          <p className="text-xs text-muted-foreground">
            {stats.openTickets === 0 ? 'No open tickets' : 'Requires attention'}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalAssets}</div>
          <p className="text-xs text-muted-foreground">
            {stats.totalAssets === 0 ? 'No assets yet' : 'Hardware & software'}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Assigned Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.assignedAssets}</div>
          <p className="text-xs text-muted-foreground">
            {stats.assignedAssets === 0 ? 'No assigned assets' : 'Currently in use'}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
