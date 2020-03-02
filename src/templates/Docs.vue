<template>
	<div class="docs">
		<div class="docs__sidebar"></div>
		<div class="container docs__content">
			<VueRemarkContent />
		</div>
	</div>
</template>

<script>
export default {
	name: "Docs"
};
</script>

<page-query>
query DocPage ($path: String!) {
	doc: docPage (path: $path) {
		title
		path
		content
	}
}
</page-query>
