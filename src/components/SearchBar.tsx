'use client'

import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useRef } from 'react'

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleEscape(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key.toLocaleLowerCase() === 'escape') {
      inputRef?.current?.blur()
    }
  }

  return (
    <div className="relative flex h-14 w-full flex-col bg-white">
      <div className="relative z-10 h-14 rounded-md">
        <Input
          onKeyDown={handleEscape}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />

        <Button className="absolute inset-y-0 right-0 h-full rounded-l-none">
          <Search className="size-6" />
        </Button>
      </div>
    </div>
  )
}
