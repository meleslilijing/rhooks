import {useState} from 'react'
export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  // your code here
  const res = fetcher()
  const [data, setData] = useState(res instanceof Promise ? undefined : res)
  const [error, setError] = useState<E>()

  if (res instanceof Promise) {
    Promise.resolve(res).then(d => setData(d))
      .catch(err => setError(err))
  }

  return {data, error}
}

function App() {
  const { data, error } = useSWR('/api', fetcher)
  if (error) return <div>failed</div>
  if (!data) return <div>loading</div>

  return <div>succeeded</div>
}