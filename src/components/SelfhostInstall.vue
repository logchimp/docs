<template>
	<div class="products">
		<g-link
			v-for="product in products"
			:key="product.title"
			class="product"
			:to="product.link"
		>
			<img :src="product.image" :alt="product.title" />
			<h3>{{ product.title }}</h3>
			<p>{{ product.label }}</p>
		</g-link>
	</div>
</template>

<script>
export default {
	name: "SelfhostInstall",
	data() {
		return {
			products: [
				{
					title: "Ubuntu",
					image: "/images/docs/ubuntu-logo.png",
					link: "/docs/install/ubuntu",
					label: "20.04 LTS"
				},
				{
					title: "Install from Source",
					image: "/images/docs/terminal-logo.png",
					link: "/docs/install/source",
					label: "For developing LogChimp"
				},
				{
					title: "Gitpod",
					image: "/images/docs/gitpod.png",
					link: "/docs/install/gitpod",
					label: "Try it for a spin"
				}
			]
		}
	}
}
</script>
