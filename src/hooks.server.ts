import * as main from './locales/main.loader.server.svelte.js'
import * as js from './locales/js.loader.server.js'
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server'
import { locales } from './locales/data.js'
import type { Handle } from '@sveltejs/kit'

// load at server startup
loadLocales(main.key, main.loadCount, main.loadCatalog, locales)
loadLocales(js.key, js.loadCount, js.loadCatalog, locales)

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.params?.lang ?? 'en'
	return await runWithLocale(lang, () =>
		resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', lang)
		})
	)
}
