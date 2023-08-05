import React, {useRef, useEffect} from 'react';

export function useIsMounted(): () => boolean {
  // your code here
  const ref = useRef(false)
  useEffect(() => {
    ref.current = true 
    return () => {
      ref.current = false
    }
  }, [])
  return () => ref.current
}