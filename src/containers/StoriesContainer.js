import React, { useEffect, useState } from 'react'
import { Story } from '../components/Story'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { getStoryIds } from '../services/hackernewsApi'
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles'

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll()
  const [ storyIds, setStoryIds ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const Ids = await getStoryIds()
      setStoryIds(Ids)
    }
    console.log(count)
    fetchData()
  }, [count])

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-testid='stories-container'>
        <h1>Hackernews Stories</h1>
        {storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId={storyId} />)}
      </StoriesContainerWrapper>
    </>
  )
}
