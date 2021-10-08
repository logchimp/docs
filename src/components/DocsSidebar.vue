<template>
	<nav class="docs-sidebar">
		<div class="docs-sidebar-category">
			<g-link class="docs-sidebar-category-item" to="/docs">
				<div class="docs-sidebar-category-icon">
					<file-icon />
				</div>
				<p>Docs</p>
			</g-link>
			<g-link class="docs-sidebar-category-item" to="/api">
				<div class="docs-sidebar-category-icon">
					<api-icon />
				</div>
				<p>APIs</p>
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
import { FileText as FileIcon, Binary as ApiIcon } from 'lucide-vue'

export default {
	name: 'DocsSidebar',
	props: {
		links: {
			type: Array,
			default: () => {
				return []
			},
		},
	},
	components: {
		// icons
		FileIcon,
		ApiIcon,
	},
}
</script>
