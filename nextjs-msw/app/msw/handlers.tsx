import { http, HttpResponse } from 'msw'
import { mockData } from './mock-data'

export const handlers = [
  http.get('http://my-backend.com/mock-posts', () => {
    return HttpResponse.json(mockData)
  })
]
