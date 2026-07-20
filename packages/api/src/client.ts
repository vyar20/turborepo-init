import { hc } from 'hono/client'
import type { AppRoute } from './types'

export const client = hc<AppRoute>('http://localhost:3000/api')['api']
