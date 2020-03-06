// eslint-disable react-hooks/exhaustive-deps
import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hackernewsApi'

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataStory = await getStory(storyId)
        if(dataStory && dataStory.url) {
          setStory(dataStory)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {JSON.stringify(story)}
    </div>
  )
}
