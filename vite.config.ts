import adapter from '@sveltejs/adapter-static'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { config as dotEnvConfig } from 'dotenv'
import { defineConfig } from 'vite'

// have to configure dotenv to load correct .env file
dotEnvConfig({ path: `.env.${process.env.NODE_ENV}` })

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter({
				pages: 'public',
				assets: 'public',
				fallback: '404.html',
				precompress: false,
				strict: true
			})
		})
	]
})
