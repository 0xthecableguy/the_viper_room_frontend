import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: null,
			strict: true
		}),
		paths: {
			base: '/the_viper_room_frontend'
		},
		alias: {
			'@services': 'src/services',
			'@components': 'src/routes/components',
		}
	}
};

export default config;
