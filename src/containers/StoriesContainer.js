import React, { useEffect, useState } from 'react'
import { Story } from '../components/Story'
import { getStoryIds } from '../services/hackernewsApi'
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles'

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
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid='stories-container'>
        <h1>Hackernews Stories</h1>
        {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
      </StoriesContainerWrapper>
    </>
  )
}
