/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { getStory } from '../services/hackernewsApi'
import { StoryTitle, StoryWrapper, StoryMeta, StoryMetaElement } from '../styles/StoryStyles'
import { mapTime } from '../mappers/mapTime'

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

  return story && story.url ? (
    <StoryWrapper data-testid='story'> 
      <StoryTitle>
        <a href={story.url}> {story.title} </a>
      </StoryTitle>

      <StoryMeta>
        <span data-testid='story-by'>
          <StoryMetaElement color='#000'>By: </StoryMetaElement> {story.by}
        </span>
        <span data-testid='story-time'>
          <StoryMetaElement color='#000'>Time: </StoryMetaElement> {`  `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
      
    </StoryWrapper>
  ) : null
}
