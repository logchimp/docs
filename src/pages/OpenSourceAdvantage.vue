<template>
	<Layout>
		<div class="container">
			<header class="static-layout-header">
				<h2 class="static-layout-heading">Why open source?</h2>
				<p class="small-text">
					LogChimp was/is/will be open-source for you to collect feedback from
					your customers 😉
				</p>
			</header>

			<div class="open-source-list">
				<div class="open-source-item">
					<img
						src="@/assets/images/logchimp-github-repo.png"
						alt="LogChimp Github repository"
					/>
					<div class="open-source-item-content">
						<h2>Open source</h2>
						<p>
							LogChimp is an open source software that is supported by a vibrant
							community with {{ $page.repo.stargazers_count }} stars 🤩. We
							release all our code and intellectual property under an open
							source license. Not only do you retain total control over data —
							but you have full access to source code, and core APIs.
						</p>
					</div>
				</div>

				<!-- <div class="open-source-item">
					<img
						src="@/assets/images/logchimp-github-repo.png"
						alt="LogChimp Github repository"
					/>
					<div class="open-source-item-content">
						<h2>Data ownership</h2>
						<p>

						</p>
					</div>
				</div> -->

				<div class="open-source-item">
					<img
						src="@/assets/images/logchimp-vulnerability-scanning.png"
						alt="LogChimp Github repository"
					/>
					<div class="open-source-item-content">
						<h2>Vulnerability Scanning</h2>
						<p>
							LogChimp performs CodeQL analytics using GitHub Actions to continuously scan
							for vulnerabilities.
						</p>
					</div>
				</div>

				<div class="open-source-item">
					<img
						src="@/assets/images/logchimp-security.png"
						alt="LogChimp Github repository"
					/>
					<div class="open-source-item-content">
						<h2>Security</h2>
						<p>
							Run LogChimp site under your existing security and IT policies.
							Deploy to public, private or hybrid clouds with full access to
							source code and total control of your single-tenant system.
						</p>
					</div>
				</div>

				<div class="open-source-item">
					<img
						src="@/assets/images/logchimp-github-repo.png"
						alt="LogChimp Github repository"
					/>
					<div class="open-source-item-content">
						<h2>Privacy</h2>
						<p>
							Your IP address, your usage patterns, the contents of your
							messages—SaaS services know more about your company than you do.
							In contrast, Mattermost provides the benefits of modern
							communication without sacrificing privacy.
						</p>
					</div>
				</div>

				<div class="open-source-item">
					<img
						src="@/assets/images/logchimp-scalability.png"
						alt="LogChimp Github repository"
					/>
					<div class="open-source-item-content">
						<h2>Scalability</h2>
						<p>
							LogChimp was built ground-up for enterprise with a single-tenant
							private cloud architecture offering high availability and
							horizontal scaling. Tens of thousands of users can operate out of
							a single team and hundreds of teams can be deployed in an
							enterprise.
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	name: "OpenSourceAdvantagePage",
	metaInfo: {
		title: "How open source bring advantage to LogChimp?",
		meta: [
			// {
			// 	name: 'description',
			// 	content: 'Build better products by tracking customer feedback with LogChimp.'
			// },
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/open-source-advantage/"
			},

			// Google
			// {
			// 	itemprop: 'description',
			// 	content: 'Build better products by tracking customer feedback with LogChimp.'
			// },

			// Facebook
			{
				property: "og:title",
				content: "How open source bring advantage to LogChimp?"
			},
			// {
			// 	property: 'og:description',
			// 	content: 'Build better products by tracking customer feedback with LogChimp.'
			// },
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/open-source-advantage/"
			},

			// Twitter
			{
				name: "twitter:title",
				content: "How open source bring advantage to LogChimp?"
			},
			// {
			// 	name: 'twitter:description',
			// 	content: 'Build better products by tracking customer feedback with LogChimp.'
			// },
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/open-source-advantage/"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/open-source-advantage/"
			}
		]
	}
};
</script>

<page-query>
query {
  repo: logchimpRepository(id: "234876564") {
    stargazers_count
  }
}
</page-query>
