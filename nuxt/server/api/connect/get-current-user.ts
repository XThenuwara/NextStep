import client from '../../../server/utils/directus-client'
import { readUser } from '@directus/sdk';
import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const token = event.node.req.headers.authorization?.split(' ')[1]

    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
        message: 'No authentication token found'
      })
    }
    const request = readUser("me");

    const user = await client.request<DirectusUser>(request)

    return {
      success: true,
      data: user
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Internal Server Error',
      message: error.message || 'An error occurred while fetching user information'
    })
  }
})