import { Ref, useState, useRef, useEffect, useCallback } from 'react'

export function useHover<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [isHoved, setIsHoved] = useState(false)
  const ref = useRef<T | null>()
  const handleMouseEnter = useCallback(() => {
    setIsHoved(true)
  }, [])
  const handleMouseLeave = useCallback(() => {
    setIsHoved(false)
  }, [])
  const refCallback = useCallback((node) => {
    if (ref.current) {
      const el = ref.current
      el.removeEventListener('mouseenter', handleMouseEnter)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
    ref.current = node
    if (ref.current) {
      const el = ref.current
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  return [refCallback, isHoved]
}