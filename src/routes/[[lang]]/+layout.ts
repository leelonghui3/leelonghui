import { locales, type Locale } from '../../locales/data.js'
import { loadLocale } from 'wuchale/load-utils'
// so that the loaders are registered, only here, not required in nested ones
import { browser } from '$app/env'
// import { resolve } from '$app/paths'
import type { LayoutLoad } from './$types.js'

export const load: LayoutLoad = async ({ params }) => {
	// const resolved = resolve('/[[lang]]', { lang: params?.lang ?? 'en' })
	const lang = (params.lang ?? 'en') as Locale

	if (browser && locales.includes(lang)) {
		await loadLocale(lang)
	}
}

export const prerender = true
