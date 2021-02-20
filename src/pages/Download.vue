<template>
	<Layout>
		<header class="static-layout-header">
			<h2 class="static-layout-heading">Download self-managed software</h2>
			<p class="small-text">
				Download and install on any of the following platforms
			</p>
		</header>

		<selfhost-install />
	</Layout>
</template>

<script>
// components
import SelfhostInstall from "../components/SelfhostInstall";

export default {
	name: "DownloadPage",
	 components: {
		//  components
		SelfhostInstall
	},
	metaInfo: {
		title: "Download the latest version of the LogChimp self-hosted software",
		meta: [
			{
				name: 'description',
				content: 'Download and install the lastest version of LogChimp on any service or cloud-provider.'
			},
			{
				property: 'url',
				content: 'https://logchimp.codecarrot.net/download/'
			},

			// Google
			{
				itemprop: 'description',
				content: 'Download and install the lastest version of LogChimp on any service or cloud-provider.'
			},

			// Facebook
			{
				property: 'og:title',
				content: 'Download the latest version of the LogChimp self-hosted software'
			},
			{
				property: 'og:description',
				content: 'Download and install the lastest version of LogChimp on any service or cloud-provider.'
			},
			{
				property: 'og:url',
				content: 'https://logchimp.codecarrot.net/download/'
			},

			// Twitter
			{
				name: 'twitter:title',
				content: 'Download the latest version of the LogChimp self-hosted software'
			},
			{
				name: 'twitter:description',
				content: 'Download and install the lastest version of LogChimp on any service or cloud-provider.'
			},
			{
				name: 'twitter:url',
				content: 'https://logchimp.codecarrot.net/download/'
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/download/"
			}
		]
	}
}
</script>
