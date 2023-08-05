import {useEffect, useRef} from 'react'
export function useTimeout(callback: () => void, delay: number) {
  // your code here
  const ref = useRef<Function>()
  useEffect(() => {
    ref.current = callback
  }, [callback])
  useEffect(() => {
    const timer = setTimeout(() => ref.current(), delay)
    return () => {
      clearTimeout(timer)
    }
  }, [delay])
}