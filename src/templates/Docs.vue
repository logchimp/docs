<template>
	<div class="container">
		<div class="docs">
			<div class="docs__sidebar">
				<docs-sidebar :menu="docsMenu" />
			</div>
			<div class="docs__content">
				<VueRemarkContent />
			</div>
		</div>
	</div>
</template>

<script>
// data
import DocsMenu from "../../data/docs.json";

// components
import DocsSidebar from "../components/DocsSidebar";

export default {
	name: "Docs",
	components: {
		DocsSidebar
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
