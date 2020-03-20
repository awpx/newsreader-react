/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo } from 'react'
import { getStory } from '../services/hackernewsApi'
import { StoryTitle, StoryWrapper, StoryMeta, StoryMetaElement } from '../styles/StoryStyles'
import { mapTime } from '../mappers/mapTime'

export const Story = memo(function Story({ storyId }) {
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

  return story && story.url ? (
    <StoryWrapper data-testid='story'> 
      <StoryTitle>
        <a href={story.url} target="_blank" rel="noopener noreferrer"> {story.title} </a>
      </StoryTitle>

      <StoryMeta>
        <span data-testid='story-by'>
          <StoryMetaElement color='#000'>By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid='story-time'>
          <StoryMetaElement color='#000'>Posted: </StoryMetaElement> {`  `}
          {mapTime(story.time)} ago
        </span>
      </StoryMeta>
      
    </StoryWrapper>
  ) : null
})
