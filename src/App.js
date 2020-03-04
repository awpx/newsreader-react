import React, { useEffect, useState } from 'react'
import { getStoryIds } from './services/hackernewsApi'

export const App = () => {
  const [ storyIds, setStoryIds ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStoryIds()
      setStoryIds(data)
    }
    fetchData()
  }, [])

  return (
    <p>{JSON.stringify(storyIds)}</p>
  )
}
