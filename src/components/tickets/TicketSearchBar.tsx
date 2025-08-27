'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useLocalizedStrings } from '@/contexts/LocaleContext'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'

interface TicketSearchBarProps {
  onSearch: (query: string) => void
  searchQuery: string
}

export function TicketSearchBar({ onSearch, searchQuery }: TicketSearchBarProps) {
  const { user } = useAuth()
  const { getStrings } = useLocalizedStrings()
  const strings = getStrings()
  const [localQuery, setLocalQuery] = useState(searchQuery)

  if (user?.role !== 'ADMIN') {
    return null
  }

  const handleSearch = () => {
    onSearch(localQuery)
  }

  const handleClear = () => {
    setLocalQuery('')
    onSearch('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex gap-2 mb-6 p-4 bg-gray-50 rounded-lg border">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder={strings.tickets.searchPlaceholder}
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10"
        />
      </div>
      <Button 
        onClick={handleSearch}
        variant="default"
        size="sm"
        className="px-4"
      >
        <Search className="h-4 w-4 mr-2" />
        {strings.common.search}
      </Button>
      {searchQuery && (
        <Button 
          onClick={handleClear}
          variant="outline"
          size="sm"
          className="px-4"
        >
          <X className="h-4 w-4 mr-2" />
          {strings.tickets.clearSearch}
        </Button>
      )}
    </div>
  )
}