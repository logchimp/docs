<template>
	<docs-layout
		:menu="apiMenu"
		:title="$page.api.title"
		route="api"
	>
		<VueRemarkContent />
	</docs-layout>
</template>

<script>
// data
import ApiMenu from "../../data/api.json";

// components
import DocsLayout from "../layouts/Docs";

export default {
	name: "Api",
	components: {
		DocsLayout
	},
	computed: {
		apiMenu() {
			return ApiMenu;
		}
	}
};
</script>

<page-query>
query ApiPage ($path: String!) {
	api: apiPage (path: $path) {
		title
		path
		content
	}
}
</page-query>
