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
	</div>
</template>

<script>
// data
import links from "@/data/doc-links.yaml";

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
		links() {
			return links;
		}
	},
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
