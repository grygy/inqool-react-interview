// Feel free to use something else than 'axios', for example 'ky'
import axios from 'axios'

// Documentation is at https://developer.github.com/v3/
const BASE_URL = 'https://api.github.com';

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
}

export const getRepositories = async (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return fetchData(url)
}

export const getUser = async (username: string) => {
  const url = `${BASE_URL}/users/${username}`
  return fetchData(url)
}

export const getOrganizations = async (username: string) => {
  const url = `${BASE_URL}/users/${username}/orgs`
  return fetchData(url)
}
