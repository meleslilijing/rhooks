import {useState, useCallback} from 'react'
export function useToggle(defOn: boolean): [boolean, () => void] {
  const [on, setOn] = useState(defOn)
  const toggle = useCallback(() => setOn(on => !on), [])
  return [on, toggle]
}
