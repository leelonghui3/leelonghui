import { mdsvex } from 'mdsvex'
import tailwindcss from '@tailwindcss/vite'
import adapter from '@sveltejs/adapter-cloudflare'
import { sveltekit } from '@sveltejs/kit/vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import { wuchale } from 'wuchale/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		tailwindcss(),
		wuchale(),
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter(),
			alias: {
				$src: 'src',
				$assets: 'src/lib/assets',
				$components: 'src/lib/components',
				$config: 'src/lib/config',
				$data: 'src/lib/data'
			},
			preprocess: [mdsvex({ extensions: ['.svx', '.md'] })],
			extensions: ['.svelte', '.svx', '.md'],
			vitePlugin: { inspector: true }
		})
	]
})
