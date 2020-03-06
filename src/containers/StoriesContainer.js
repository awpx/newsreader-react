import React, { useEffect, useState } from 'react'
import { Story } from '../components/Story'
import { getStoryIds, getStory } from '../services/hackernewsApi'

export const StoriesContainer = () => {
  const [ storyIds, setStoryIds ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const Ids = await getStoryIds()
      setStoryIds(Ids)

      // const story = await getStory(24563493)
      // console.log(story)
    }
    fetchData()
  }, [])

  return (
    storyIds.map(storyId => <Story storyId={storyId} />)
  )
}
