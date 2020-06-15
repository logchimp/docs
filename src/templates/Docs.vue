<template>
	<docs-layout
		:menu="docsMenu"
		:title="$page.doc.title"
		route="docs"
	>
		<VueRemarkContent />
	</docs-layout>
</template>

<script>
// data
import DocsMenu from "../../data/docs.json";

// components
import DocsLayout from "../layouts/Docs";

export default {
	name: "Docs",
	components: {
		DocsLayout
	},
	computed: {
		docsMenu() {
			return DocsMenu;
		}
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
