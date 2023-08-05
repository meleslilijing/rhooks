import React, { useState, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
  const [value, setValue] = useState(initialValue || [])
  const push = useCallback((item: T) => {
    setValue([...value, item])
  }, [])
  const removeByIndex = useCallback((index: number) => {
    if (index < 0 || index >= value.length) {
      return
    }
    const copy = [...value]
    copy.splice(index, 1)
    setValue(copy)
  }, [])

  return {value, push, removeByIndex}
}