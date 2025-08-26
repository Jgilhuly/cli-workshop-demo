'use client'

import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  HomeIcon, 
  TicketIcon, 
  ComputerIcon, 
  UsersIcon, 
  SettingsIcon 
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Tickets', href: '/tickets', icon: TicketIcon },
  { name: 'Assets', href: '/assets', icon: ComputerIcon },
  { name: 'Users', href: '/users', icon: UsersIcon, adminOnly: true },
  { name: 'Settings', href: '/settings', icon: SettingsIcon, adminOnly: true },
]

export function Sidebar() {
  const { user } = useAuth()
  const pathname = usePathname()

  if (!user) return null

  const filteredNavigation = navigation.filter(item => 
    !item.adminOnly || user.role === 'ADMIN'
  )

  return (
    <div className="flex h-full w-64 flex-col bg-gray-50 border-r">
      <nav className="flex-1 space-y-1 px-2 py-4">
        {filteredNavigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'w-full justify-start',
                  isActive && 'bg-gray-200 text-gray-900'
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
