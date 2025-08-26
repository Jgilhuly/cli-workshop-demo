'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { CreateUserDialog } from './CreateUserDialog'

export function CreateUserButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <PlusIcon className="mr-2 h-4 w-4" />
        Add User
      </Button>
      
      <CreateUserDialog 
        open={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </>
  )
}
