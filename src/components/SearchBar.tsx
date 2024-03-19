'use client'

import { Loader2, Search } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isSearching, startTransition] = useTransition()
  const [query, setQuery] = useState<string>('')

  const router = useRouter()

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key.toLocaleLowerCase() === 'escape') {
      inputRef?.current?.blur()
    }

    if (e.key.toLocaleLowerCase() === 'enter') {
      handleMagicSearch()
    }
  }

  function handleOnValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  function handleMagicSearch() {
    startTransition(() => {
      router.push(`/search?q=${query}`)
    })
  }

  return (
    <div className="relative flex h-14 w-full flex-col bg-white">
      <div className="relative z-10 h-14 rounded-md">
        <Input
          disabled={isSearching}
          onKeyDown={handleKeyDown}
          onChange={handleOnValueChange}
          value={query}
          ref={inputRef}
          className="absolute inset-0 h-full"
        />

        <Button
          disabled={isSearching}
          size="sm"
          onClick={handleMagicSearch}
          className="absolute inset-y-0 right-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2 className="size-6 animate-spin" />
          ) : (
            <Search className="size-6" />
          )}
        </Button>
      </div>
    </div>
  )
}
