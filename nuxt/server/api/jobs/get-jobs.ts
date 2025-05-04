import { directusServer, readItems } from '../../../server/utils/directus-server';

export default defineEventHandler(async (event) => {
  try {
    const jobs = await directusServer.request(
      readItems('Jobs', {
        fields: [
          'id',
          'title',
          'description',
          'company'
        ],
        sort: ['-date_created']
      })
    );

    return {
      jobs,
      status: 'success'
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch jobs'
    });
  }
});