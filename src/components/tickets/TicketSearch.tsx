'use client'

import { useState, useCallback } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'
import { searchTickets } from '@/lib/actions/tickets'

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

interface TicketSearchProps {
  onSearchResults: (tickets: Ticket[]) => void
  onSearching: (isSearching: boolean) => void
}

export function TicketSearch({ onSearchResults, onSearching }: TicketSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = useCallback(async () => {
    if (!searchTerm.trim()) {
      onSearchResults([])
      return
    }

    setIsSearching(true)
    onSearching(true)
    
    try {
      const results = await searchTickets(searchTerm)
      onSearchResults(results)
    } catch (error) {
      console.error('Search failed:', error)
      onSearchResults([])
    } finally {
      setIsSearching(false)
      onSearching(false)
    }
  }, [searchTerm, onSearchResults, onSearching])

  const handleClear = () => {
    setSearchTerm('')
    onSearchResults([])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search tickets by title, description, or user..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-10"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Button 
        onClick={handleSearch} 
        disabled={isSearching || !searchTerm.trim()}
        className="min-w-[100px]"
      >
        {isSearching ? 'Searching...' : 'Search'}
      </Button>
    </div>
  )
}