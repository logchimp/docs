<template>
	<nav class="docs-sidebar">
		<div class="docs-sidebar-category">
			<g-link :class="$style['category-item']" to="/docs">
				<div :class="$style['category-icon']">
					<file-icon />
				</div>
				<p>Docs</p>
			</g-link>
			<g-link :class="$style['category-item']" to="/api">
				<div :class="$style['category-icon']">
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

<style module lang='sass'>
.category-item
	&:nth-child(1) .category-icon
		background-color: #fe5f55

	&:nth-child(2) .category-icon
		background-color: #9333ea

.category-icon
	width: 2rem
	height: 2rem
	border-radius: 0.45rem
	display: inline-flex
	align-items: center
	justify-content: center
	margin-right: 0.5rem

	svg
		width: 1.25rem
		height: 1.25rem
		stroke: white
		stroke-width: 2px
</style>
