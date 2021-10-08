<template>
	<div class="docs-page">
		<div class="docs-header">
			<Header :full-width="true" />
		</div>
		<div class="page-divider"></div>
		<div class="docs">
			<aside class="docs-links">
				<docs-sidebar :links="links" />
			</aside>
			<main class="docs-content">
				<div class="docs-content-inner">
					<header>
						<h1>{{ $page.api.title }}</h1>
					</header>
					<VueRemarkContent class="markdown" />
				</div>
				<div class="docs-footer">
					<SmallFooter />
				</div>
			</main>
		</div>
	</div>
</template>

<script>
// data
import links from '@/data/api-links.yaml'

// components
import Header from '../layouts/partials/Header'
import SmallFooter from '../layouts/partials/SmallFooter'
import DocsSidebar from '../components/DocsSidebar'

export default {
	name: 'APITemplate',
	components: {
		Header,
		DocsSidebar,
		SmallFooter,
	},
	computed: {
		links() {
			return links
		},
	},
	metaInfo() {
		return {
			title: `${this.$page.api.title} | APIs | LogChimp`,
			description: this.$page.api.description,
			meta: [
				{
					name: 'robots',
					content: 'index, follow',
				},

				// Facebook
				{
					property: 'og:site_name',
					content: 'LogChimp',
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					name: 'og:image',
					content: 'https://logchimp.codecarrot.net/images/logchimp-social.png',
				},

				// Twitter
				{
					name: 'twitter:image',
					content: 'https://logchimp.codecarrot.net/images/logchimp-social.png',
				},
				{
					name: 'twitter:site',
					content: '@logchimp',
				},
				{
					name: 'twitter:card',
					content: 'summary_large_image',
				},
			],
			link: [
				{
					rel: 'alternate icon',
					type: 'image/png',
					href: 'https://logchimp.codecarrot.net/images/favicon.png',
				},
				{
					rel: 'shortcut icon',
					type: 'image/icon',
					href: 'https://logchimp.codecarrot.net/favicon.ico',
				},
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: 'https://logchimp.codecarrot.net/images/favicon.svg',
				},
			],
		}
	},
}
</script>

<page-query>
query ApIpage ($path: String!) {
	api: apIpage (path: $path) {
		title
		path
		content
	}
}
</page-query>
