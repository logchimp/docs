<template>
	<nav class="docs-sidebar">
		<div class="docs-sidebar-category">
			<g-link to="/docs">
				<div class="docs-sidebar-category-icon">
					<file-icon />
				</div>
				<p>Docs</p>
			</g-link>
		</div>
		<div class="docs-sidebar-container">
			<div v-for="section in links" class="docs-sidebar-section">
				<h5 class="docs-sidebar-section-title">
					{{ section.title }}
				</h5>
				<g-link :to="item.link" v-for="item in section.items" :key="item.link">
					{{ item.title }}
				</g-link>
			</div>
		</div>
	</nav>
</template>

<script>
import { FileText as FileIcon } from "lucide-vue";

export default {
	name: "DocsSidebar",
	props: {
		links: {
			type: Array,
			default: () => {
				return [];
			}
		}
	},
	components: {
		FileIcon
	}
};
</script>
