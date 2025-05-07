import { registerUser } from '@directus/sdk';
import { H3Event } from 'h3';
import client from '../../utils/directus-client';

export default defineEventHandler(async (event: H3Event) => {
	try {
		const body = await readBody(event);
		const { email, password, firstName, lastName } = body;

		if (!email || !password || !firstName || !lastName) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Bad Request',
				message: 'Email, password, first name, and last name are required'
			});
		}

		await client.request(
			registerUser(email, password, {
				first_name: firstName,
				last_name: lastName
			})
		);

		return {
			success: true,
			message: 'User registered successfully'
		};
	} catch (error: any) {
		throw createError({
			statusCode: error.statusCode || 500,
			statusMessage: error.statusMessage || 'Internal Server Error',
			message: error.message || 'An error occurred during registration'
		});
	}
});
