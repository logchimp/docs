<template>
	<Layout>
		<div class="inner-max">
			<div class="static-layout">
				<header class="static-layout-header">
					<h2 class="static-layout-heading">Use Cases</h2>
				</header>
			</div>

			<div class="use-case-everyone">
				<div class="use-case-everyone-content">
					<h1>💡 What does it means?</h1>
					<p>
						LogChimp is for everyone who wants to collect feedback from their
						customers.
					</p>
					<p>To get started, <g-link href="/docs">read the docs</g-link>.</p>
				</div>
				<div class="use-case-everyone-image">
					<img :src="randomGifImage" alt="Everyone gif image" />
					<p class="copyright">
						This gif is copyright to it's respective owner.
					</p>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	name: "UseCasePage",
	data() {
		return {
			everyone: [
				"https://media1.tenor.com/images/3720320d9f5ddb490e0eccdd8129a101/tenor.gif?itemid=11387812",
				"https://media1.tenor.com/images/57f149fbc519bad8a18513092928e558/tenor.gif?itemid=5681533",
				"https://media1.tenor.com/images/16fd89701b53935ae98c6db47f450522/tenor.gif?itemid=18289478",
				"https://media1.tenor.com/images/267bbfdf9b5fec4e2cfae77a122f2364/tenor.gif?itemid=14573208",
				"https://media1.tenor.com/images/1bb194b3da2ad5ef346dd375ee152015/tenor.gif?itemid=13588935",
				"https://media1.tenor.com/images/77fecd410b5a385a0b424825e0f3d171/tenor.gif?itemid=13877652",
				"https://media1.tenor.com/images/7faceece72495e42bbf2a42df570263e/tenor.gif?itemid=18154395"
			]
		};
	},
	computed: {
		randomGifImage() {
			const randomCount = Math.floor(Math.random() * this.everyone.length);
			return this.everyone[randomCount];
		}
	},
	metaInfo: {
		title: "Use cases",
		meta: [
			{
				name: "description",
				content: "LogChimp can fit into all shapes and sizes of organisation."
			},
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/use-case/"
			},

			// Google
			{
				itemprop: "description",
				content: "LogChimp can fit into all shapes and sizes of organisation."
			},

			// Facebook
			{
				property: "og:title",
				content: "Use cases"
			},
			{
				property: "og:description",
				content: "LogChimp can fit into all shapes and sizes of organisation."
			},
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/use-case/"
			},

			// Twitter
			{
				name: "twitter:title",
				content: "Use cases"
			},
			{
				name: "twitter:description",
				content: "LogChimp can fit into all shapes and sizes of organisation."
			},
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/use-case/"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/use-case/"
			}
		]
	}
};
</script>

<style lang="sass">
.copyright
	font-size: 0.5rem
	margin-top: 0.25rem
	color: #949494
</style>
