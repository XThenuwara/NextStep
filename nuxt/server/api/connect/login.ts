import type { AuthenticationData } from '@directus/sdk';
import client from '../../../server/utils/directus-client';
import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event): Promise<{ success: boolean; data: AuthenticationData }> => {
	const body = await readBody(event);

	try {
		const authResponse = await client.login(body.email, body.password);

		return {
			success: true,
			data: authResponse
		};
	} catch (error: any) {
		throw createError({
			statusCode: 401,
			statusMessage: 'Authentication failed',
			message: error.message
		});
	}
});
