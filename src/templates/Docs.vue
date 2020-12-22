<template>
	<div>
		<Header />
		<div class="docs">
			<aside class="docs-links">
				<docs-sidebar :links="links" />
			</aside>
			<main class="docs-content">
				<header>
					<h1>{{ $page.doc.title }}</h1>
				</header>
				<div class="markdown">
					<VueRemarkContent />
				</div>
			</main>
		</div>
		<Footer />
	</div>
</template>

<script>
// data
import DocsMenu from "../../data/docs.json";

// components
import Header from "../layouts/partials/Header";
import DocsSidebar from "../components/DocsSidebar";

export default {
	name: "Docs",
	metaInfo() {
		return {
			title: this.$page.doc.title,
			description: this.$page.doc.description,
		};
	},
	components: {
		Header,
		DocsSidebar
	},
	computed: {
		docsMenu() {
			return DocsMenu;
		},
	},
};
</script>

<page-query>
query DocPage ($path: String!) {
	doc: docPage (path: $path) {
		title
		description
		path
		content
	}
}
</page-query>
