import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import { Story} from '../components/Story'
import { singularStory } from '../fixtures'
import { getStory } from '../services/hackernewsApi'


beforeEach(() => {
  cleanup()
  jest.resetAllMocks()
})


jest.mock('../services/hackernewsApi', () => ({
  getStory: jest.fn(),
}))

test('renders the story components', async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory))

  const { getByText, getByTestId } = render(<Story storyId='1' />)
  await waitForElement(() => [
    expect(getByTestId('story')).toBeTruthy(),
    expect(getByText('Covid: never ending death')).toBeTruthy(),
    expect(getByTestId('story-by').textContent).toEqual('By: awpx'),
  ])
})