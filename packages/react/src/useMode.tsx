import { store } from '@fower/store'
import { useState, useEffect } from 'react'
import {} from 'react'
interface Result {
  mode: string
  setMode: (mode: string) => void
}

export function useMode(): Result {
  const [state, setState] = useState<string>(store.getMode())

  useEffect(() => {
    const cacheMode = localStorage.getItem('fower-mode')
    if (cacheMode) {
      setMode(cacheMode)
    }
  }, [])
  function setMode(mode: string) {
    setState(mode)
    store.setMode(mode)
  }

  return { mode: state, setMode } as Result
}