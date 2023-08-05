import {useEffect, useState} from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [defferValue, setDefferValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDefferValue(value), delay)
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return defferValue
}
