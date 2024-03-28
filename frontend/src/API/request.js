import axios from 'axios'

const API_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_URL
});

export async function requestData(endpoint) {
  const response = api.get(endpoint)
  return response
}

export async function requestPost(endpoint, data) {
  const response = api.post(endpoint, data)
  return response
}

export async function requestPut(endpoint, body) {
  const response = api.put(endpoint, body)
  return response
}

export async function requestDelete(endpoint) {
  const response = api.delete(endpoint)
  return response
}