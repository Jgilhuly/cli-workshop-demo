'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { CreateAssetDialog } from './CreateAssetDialog'

export function CreateAssetButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <PlusIcon className="mr-2 h-4 w-4" />
        Add Asset
      </Button>
      
      <CreateAssetDialog 
        open={isOpen} 
        onOpenChange={setIsOpen} 
      />
    </>
  )
}
