import axios from 'axios'
import { selectFields } from '../utils/selectFields'

export const baseUrl = `https://hacker-news.firebaseio.com/v0`
export const newStoriesUrl = `${baseUrl}/newstories.json`
export const storyUrl = `${baseUrl}/item/`

//getting all new  story ID
export const getStoryIds = async () => {
  try {
    const result = await axios.get(newStoriesUrl)
    const data = result.data

    return data
  } catch (error) {
    console.error(error)
  }  
}

//getting specific story using ID
export const getStory = async (storyId) => {
  try {
    const result = await axios.get(`${storyUrl}${storyId}.json`)
    const data = result && selectFields(result.data)

    return data
  } catch (error) {
    console.error(error)
  }
}