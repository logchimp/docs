<template>
	<div class="container">
		<div class="docs">
			<div class="docs__sidebar">
				<docs-sidebar />
			</div>
			<div class="docs__content">
				<VueRemarkContent />
			</div>
		</div>
	</div>
</template>

<script>

// components
import DocsSidebar from "../components/DocsSidebar";

export default {
	name: "Docs",
	components: {
		DocsSidebar
	}
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
