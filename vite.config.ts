import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	base: import.meta.env.PROD ? '/the_viper_room_frontend/' : '/',
	server: {
		fs: {
			allow: [
				'.',
			]
		}
	}
});