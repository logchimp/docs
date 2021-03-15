<template>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
// components
import Header from "../layouts/partials/Header";
import Footer from "../layouts/partials/SmallFooter";

export default {
	name: "Default",
	components: {
		Header,
		Footer
	},
	metaInfo: {
		meta: [
			{
				name: "robots",
				content: "index, follow"
			},

			// Facebook
			{
				property: 'og:site_name',
				content: 'LogChimp'
			},
			{
				property: 'og:type',
				content: 'website'
			},
			{
				name: 'og:image',
				content: 'https://logchimp.codecarrot.net/images/logchimp-social.png'
			},

			// Twitter
			{
				name: 'twitter:image',
				content: 'https://logchimp.codecarrot.net/images/logchimp-social.png'
			},
			{
				name: 'twitter:site',
				content: '@logchimp'
			},
			{
				name: 'twitter:card',
				content: 'summary_large_image'
			}
		],
		link: [
			{
				rel: "alternate icon",
				type: "image/png",
				href: "https://logchimp.codecarrot.net/images/favicon.png"
			},
			{
				rel: "shortcut icon",
				type: "image/icon",
				href: "https://logchimp.codecarrot.net/favicon.ico"
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "https://logchimp.codecarrot.net/images/favicon.svg"
			}
		]
	}
}
</script>
