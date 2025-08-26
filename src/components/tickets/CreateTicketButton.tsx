'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { CreateTicketDialog } from './CreateTicketDialog'

export function CreateTicketButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <PlusIcon className="mr-2 h-4 w-4" />
        Create Ticket
      </Button>
      
      <CreateTicketDialog 
        open={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </>
  )
}
