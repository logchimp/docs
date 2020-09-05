<template>
	<div class="DocsSidebar">
		<div v-for="section in menu" class="DocsSidebar__section">
			<div class="DocsSidebar__section-title">
				{{ section.section }}
			</div>
			<div class="DocsSidebar__list">
				<g-link
					:to="`/${route}/${item.slug}`"
					v-for="item in section.topics"
					:key="`${route}-${item.name}`"
					class="DocsSidebar__item"
				>
					{{ item.name }}
				</g-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DocsSidebar",
	props: {
		menu: {
			type: Array,
			default: () => {
				return [];
			}
		},
		route: {
			type: String,
			required: true
		}
	}
};
</script>
