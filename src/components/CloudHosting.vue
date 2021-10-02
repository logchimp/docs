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
	name: "CloudHosting",
	data() {
		return {
			products: [
				{
					title: "Railway",
					image: "/images/docs/railway-logo.png",
					link: "/docs/install/railway",
					label: "One click deploy"
				},
				{
					title: "Render",
					image: "/images/docs/render-logo.png",
					link: "/docs/install/render",
					label: "One click deploy"
				}
			]
		}
	}
}
</script>
