import axios from 'axios'
import { getStoryIds, getStory, newStoriesUrl, storyUrl, } from '../services/hackernewsApi'
import { singularStory, storyIds, emptySingularStory } from '../fixtures'

jest.mock('axios')

describe('Hackernews Api', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('getStory functionality', () => {
    it('request and get story from Hackernews Api', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: singularStory })
      )

      const entity = await getStory(1)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`)
      expect(entity).toEqual(singularStory)
    });

    it('does not retrieve a story from the Api, but handles very well', async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: emptySingularStory })
      )

      const entity = await getStory(1)
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(emptySingularStory)
    })
  })

  describe('getStoryIds functionality', () => {
    it('requests and gets story ids from the HackerNews Api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }))

      const entity = await getStoryIds()
      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(axios.get).toHaveBeenCalledWith(newStoriesUrl)
      expect(entity).toEqual(storyIds)
    })
  })
})