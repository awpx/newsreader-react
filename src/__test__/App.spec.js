import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import { App } from '../App'
import { storyIds, singularStory } from '../fixtures'
import { getStory, getStoryIds } from '../services/hackernewsApi'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { STORY_INCREMENT } from '../constants'

beforeEach(cleanup)

jest.mock('../hooks/useInfiniteScroll.js')

jest.mock('../services/hackernewsApi', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}))

test('renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }))
  getStory.mockImplementation(() => Promise.resolve(singularStory))
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

  const { getByText, queryByTestId } = render(<App />)
  await waitForElement(() => [
    expect(getByText('Hackernews Stories')).toBeTruthy(),
    expect(getByText('Covid: never ending death')).toBeTruthy(),
    expect(queryByTestId('story-by').textContent).toEqual('By: awpx'),
  ])
})
