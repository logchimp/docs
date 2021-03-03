<template>
	<Layout>
		<div class="inner">
			<div class="homepage-hero">
				<div class="homepage-hero-content">
					<h1>Build better products with customer feedback</h1>
					<p class="small-text">
						Make product decisions by track, manage, engage, and analyze your
						customers feedback with ease.
					</p>

					<div class="homepage-hero-cta">
						<Button @click="$router.push('/docs')" type="primary">
							Get started
						</Button>
					</div>
				</div>

				<div class="homepage-hero-image">
					<g-image
						alt="LogChimp default theme homepage design preview"
						src="@/assets/images/home/logchimp-design-home-preview.png"
					/>
				</div>
			</div>
		</div>

		<div class="inner">
			<div class="homepage-post-preview homepage-section">
				<g-image
					src="@/assets/images/home/homepage-lc-post-card.png"
					alt="LogChimp post card"
				/>
				<div class="homepage-post-preview-content">
					<h2>Collect your customers feedback with confidence</h2>
					<p>
						LogChimp helps you to collect, analyze, and organise your customers
						feedback.
					</p>

					<div class="check-list">
						<check-item>
							<p>Open source</p>
						</check-item>
						<check-item>
							<p>Self-hosted</p>
						</check-item>
						<check-item>
							<p>Secure and full control of data</p>
						</check-item>
					</div>
				</div>
			</div>
		</div>

		<div class="inner">
			<div class="homepage-features homepage-section">
				<div class="homepage-features-item">
					<heart-icon style="stroke: #d75a5a" />
					<div>
						<h5>We <3 open source</h5>
						<p>
							LogChimp is open source from day-one and ready for your
							contributions.
						</p>
					</div>
				</div>
				<div class="homepage-features-item">
					<brand-icon style="stroke: #4faecc" />
					<div>
						<h5>Custom branding</h5>
						<p>Make LogChimp your own by adding custom theming.</p>
					</div>
				</div>
				<div class="homepage-features-item">
					<server-icon style="stroke: #ac39b6" />
					<div>
						<h5>Take it anywhere</h5>
						<p>You can run LogChimp on your servers</p>
					</div>
				</div>
				<div class="homepage-features-item">
					<dashboard-icon style="stroke: #ac39b6" />
					<div>
						<h5>Powerful dashboard</h5>
						<p>
							Manage posts, boards, users, roadmaps, and roles from a single
							dashboard.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
// packages
import {
	Heart as HeartIcon,
	Check as CheckIcon,
	Image as BrandIcon,
	Server as ServerIcon,
	LayoutDashboard as DashboardIcon
} from "lucide-vue";

// components
import Button from "../components/Button";
import CheckItem from "../components/CheckItem";

export default {
	title: "Homepage",
	components: {
		Button,
		CheckItem,

		// icons
		CheckIcon,
		HeartIcon,
		BrandIcon,
		ServerIcon,
		DashboardIcon
	},
	metaInfo: {
		title: "Build better products with customer feedback",
		meta: [
			{
				name: "description",
				content:
					"Build better products by tracking customer feedback with LogChimp."
			},
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/"
			},

			// Google
			{
				itemprop: "description",
				content:
					"Build better products by tracking customer feedback with LogChimp."
			},

			// Facebook
			{
				property: "og:title",
				content: "Build better products with customer feedback"
			},
			{
				property: "og:description",
				content:
					"Build better products by tracking customer feedback with LogChimp."
			},
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/"
			},

			// Twitter
			{
				name: "twitter:title",
				content: "Build better products with customer feedback"
			},
			{
				name: "twitter:description",
				content:
					"Build better products by tracking customer feedback with LogChimp."
			},
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/"
			}
		]
	}
};
</script>
