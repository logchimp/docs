<template>
	<div class="container">
		<div class="docs">
			<div class="docs__sidebar">
				<docs-sidebar :menu="docsMenu" />
			</div>
			<div class="docs__content">
				<div class="docs__meta">
					<div class="docs__meta-heading">
						{{ $page.doc.title }}
					</div>
				</div>
				<div class="markdown">
					<VueRemarkContent />
				</div>
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
