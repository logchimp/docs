<template>
	<Layout>
		<div class="static-layout">
			<header class="static-layout-header">
				<h2 class="static-layout-heading">Features</h2>
				<p class="small-text">
					LogChimp helps capture insights from your customers, prioritize what
					to build next, and inform your product decisions.
				</p>
			</header>

			<div class="features">
				<div class="features-item">
					<g-image
						src="@/assets/images/features/branding.jpg"
						alt="LogChimp feature brand"
					/>
					<div class="features-item-content">
						<h5>Customizations</h5>
						<p>Make LogChimp yours with logo, brand colors, and more.</p>
					</div>
				</div>

				<div class="features-item">
					<g-image
						src="@/assets/images/features/dashboard.jpg"
						alt="LogChimp feature brand"
					/>
					<div class="features-item-content">
						<h5>Dashboard</h5>
						<p>Manage posts, boards, users, roadmaps, and roles from a single dashboard.</p>
					</div>
				</div>

				<div class="features-item">
					<g-image
						src="@/assets/images/features/boards.jpg"
						alt="LogChimp feature brand"
					/>
					<div class="features-item-content">
						<h5>Boards</h5>
						<p>Organise the posts with boards.</p>
					</div>
				</div>

				<div class="features-item">
					<g-image
						src="@/assets/images/features/roadmaps.jpg"
						alt="LogChimp feature brand"
					/>
					<div class="features-item-content">
						<h5>Roadmaps</h5>
						<p>Tell what you're working on in one simple view.</p>
					</div>
				</div>

				<div class="features-item">
					<g-image
						src="@/assets/images/features/users.jpg"
						alt="LogChimp feature brand"
					/>
					<div class="features-item-content">
						<h5>Users</h5>
						<p>Organise the posts with boards.</p>
					</div>
				</div>

				<div class="features-item">
					<div class="features-item-content">
						<h5>Role-Based Access Controls</h5>
						<p>LogChimp has various permission levels for users (site owner, admin, moderator, manager, user, contributor, viewer).</p>
					</div>
				</div>

			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	name: "FeaturesPage",
	metaInfo: {
		title: "Features",
		meta: [
			{
				name: 'description',
				content: 'LogChimp helps capture insights from your customers, prioritize what to build next, and inform your product decisions.'
			},
			{
				property: 'url',
				content: 'https://logchimp.codecarrot.net/features'
			},

			// Google
			{
				itemprop: 'description',
				content: 'LogChimp helps capture insights from your customers, prioritize what to build next, and inform your product decisions.'
			},

			// Facebook
			{
				property: 'og:title',
				content: 'Features'
			},
			{
				property: 'og:description',
				content: 'LogChimp helps capture insights from your customers, prioritize what to build next, and inform your product decisions.'
			},
			{
				property: 'og:url',
				content: 'https://logchimp.codecarrot.net/features'
			},

			// Twitter
			{
				name: 'twitter:title',
				content: 'Features'
			},
			{
				name: 'twitter:description',
				content: 'LogChimp helps capture insights from your customers, prioritize what to build next, and inform your product decisions.'
			},
			{
				name: 'twitter:url',
				content: 'https://logchimp.codecarrot.net/features'
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/features"
			}
		]

	}
}
</script>
