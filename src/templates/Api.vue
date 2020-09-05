<template>
	<docs-layout
		:menu="apiMenu"
		:title="$page.api.title"
		:method="$page.api.method"
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
	metaInfo() {
		return {
			title: this.$page.api.title,
			description: this.$page.api.description̦,
		};
	},
	components: {
		DocsLayout,
	},
	computed: {
		apiMenu() {
			return ApiMenu;
		},
	},
};
</script>

<page-query>
query ApiPage ($path: String!) {
	api: apiPage (path: $path) {
		title
		description
		method
		path
		content
	}
}
</page-query>
