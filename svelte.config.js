import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		paths: {
			base: import.meta.env.PROD ? '/the_viper_room_frontend' : ''
		},
		alias: {
			'@services': 'src/services',
			'@components': 'src/routes/components',
		}
	}
};

export default config;
