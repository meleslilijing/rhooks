import React, { Ref, useState, useRef, useCallback } from 'react'

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const ref = useRef<T>()
  const [focused, setFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setFocused(true)
  }, [])
  const handleBlur = useCallback(() => {
    setFocused(false)
  }, [])

  const refCallback = useCallback((node) => {
    if (ref.current) {
      ref.current.removeEventListener('focus', handleFocus)
      ref.current.removeEventListener('blur', handleBlur)
    }
    ref.current = node
    if (ref.current) {
      ref.current.addEventListener('focus', handleFocus)
      ref.current.addEventListener('blur', handleBlur)
    }
  }, [])

  return [refCallback, focused]
}