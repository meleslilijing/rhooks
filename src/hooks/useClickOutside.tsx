
import React, {useEffect, useRef, useCallback} from 'react'

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>()
  const handleOutside = useCallback((e: Event) => {
    const target = e.target
    if (target && ref.current && !ref.current.contains(target as Node)) {
      callback && callback()
    }
  }, [])
  useEffect(() => {
    document?.addEventListener('click', handleOutside)
    return () => {
      document?.removeEventListener('click', handleOutside)
    }
  }, [])
  return ref
}
