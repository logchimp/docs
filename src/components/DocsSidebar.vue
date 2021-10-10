<template>
	<nav class="docs-sidebar">
		<div class="docs-sidebar-category">
			<g-link class="docs-sidebar-category-item" to="/docs">
				<div :class="$style['category-item-group']">
					<div class="docs-sidebar-category-icon">
						<file-icon />
					</div>
					<p>Docs</p>
				</div>
			</g-link>
			<g-link class="docs-sidebar-category-item" to="/api">
				<div :class="$style['category-item-group']">
					<div class="docs-sidebar-category-icon">
						<api-icon />
					</div>
					<p>APIs</p>
				</div>
				<div class="docs-sidebar-category-draft">
					draft
				</div>
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
				<!-- <div v-if="section.collapsible">
					collapsible
				</div>
				<div v-else>
					<div v-for="item in section.items">
						{{ item }}
						<div v-if="item.collapsible">
							collapsible
						</div>
						<div v-else>
							<g-link
								:to="item.link"
								v-for="item in section.items"
								:key="item.link"
							>
								{{ item.title }}
							</g-link>
						</div>
					</div>
				</div> -->
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
.category-item-group
	display: flex
	align-items: center
</style>
