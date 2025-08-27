'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useLocalizedStrings } from '@/contexts/LocaleContext'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { LanguageSwitcher } from '@/components/ui/language-switcher'


export function Header() {
  const { user, logout } = useAuth()
  const { getStrings } = useLocalizedStrings()
  const strings = getStrings()
  const authStrings = strings.auth

  if (!user) return null

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">{authStrings.appTitle}</h1>
        </div>
        
        <div className="ml-auto flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {authStrings.welcomeUser.replace('{name}', user.name)}
          </span>
          <LanguageSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem onClick={handleLogout}>
                {authStrings.logOut}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
