<template>
	<Layout>
		<div class="get-started">
			<h1>How do you want to get started?</h1>

			<div class="card get-started-product">
				<server-icon stroke="#f56565" width="2.5rem" height="2.5rem" />
				<h1>Self-Managed</h1>
				<p class="get-started-label">Download and try our open source self-hosted version.</p>

				<g-link class="button button-primary" to="/download"> Download </g-link>

				<div class="check-list">
					<div class="check-list-item">
						<check-icon />
						<p>Fully-featured LogChimp instance</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import { Server as ServerIcon, Check as CheckIcon } from "lucide-vue";

// components
import Button from "../components/Button";

export default {
	name: "GetStartedPage",
	components: {
		// components
		Button,

		// icons
		ServerIcon,
		CheckIcon
	},
	metaInfo: {
		title:
			"Get Started with LogChimp - Self-hosted collecting customer feedback software",
		meta: [
			{
				name: "description",
				content:
					"Get started using LogChimp today. Download our self-managed software, try it for free."
			},
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/get-started/"
			},

			// Google
			{
				itemprop: "description",
				content:
					"Get started using LogChimp today. Download our self-managed software, try it for free."
			},

			// Facebook
			{
				property: "og:title",
				content:
					"Get Started with LogChimp - Self-hosted collecting customer feedback software"
			},
			{
				property: "og:description",
				content:
					"Get started using LogChimp today. Download our self-managed software, try it for free."
			},
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/get-started/"
			},

			// Twitter
			{
				name: "twitter:title",
				content:
					"Get Started with LogChimp - Self-hosted collecting customer feedback software"
			},
			{
				name: "twitter:description",
				content:
					"Get started using LogChimp today. Download our self-managed software, try it for free."
			},
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/get-started/"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/get-started/"
			}
		]
	}
};
</script>
