import { EffectCallback , useEffect} from 'react'

export function useEffectOnce(effect: EffectCallback) {
  // your code here
  useEffect(effect, [])
}