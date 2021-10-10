<template>
	<nav class="docs-sidebar">
		<!-- category -->
		<div class="section-wrapper category-wrapper">
			<g-link class="item-group" to="/docs">
				<div class="left-content">
					<div class="icon">
						<file-icon />
					</div>
					<p>Docs</p>
				</div>
			</g-link>
			<g-link class="item-group" to="/api">
				<div class="left-content">
					<div class="icon">
						<api-icon />
					</div>
					<p>APIs</p>
				</div>

				<div class="right-content">
					<div class="badge">draft</div>
				</div>
			</g-link>
		</div>
		<!-- static links -->
		<div class="section-wrapper">
			<g-link to="/docs/sponsor" class="sidebar-links"> About this project </g-link>
		</div>
		<div class="section-wrapper">
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
