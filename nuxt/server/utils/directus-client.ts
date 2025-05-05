import { createDirectus, authentication, rest, login } from '@directus/sdk';

const {
	public: { directusUrl },
	directusServerToken,
} = useRuntimeConfig();


const client = createDirectus(directusUrl).with(authentication('json')).with(rest());

export default client;