<template>
	<Layout>
		<div class="inner-max">
			<div class="error-page">
				<h1>🤯 404 🤯</h1>
				<p>Page not found</p>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	name: "404ErrorPage"
};
</script>

<style lang="sass">
.error-page
	text-align: center

	h1
		font-size: 3rem
		font-weight: 600
		margin-bottom: 1rem
</style>
