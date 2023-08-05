import {useRef, useEffect} from 'react'
export function usePrevious<T>(value: T): T | undefined {
  const prev = useRef<undefined | T>()
  let temp = prev.current
  useEffect(() => {
    prev.current = value
  }, [value])
  return temp
}
