import {useEffect, useRef} from 'react'
export function useIsFirstRender(): boolean {
  // your code here
  const ref = useRef(true)
  useEffect(() => {
    ref.current = false
  }, [])
  return ref.current
}