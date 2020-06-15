<template>
	<div class="dsidebar">
		<div v-for="section in menu" class="dsidebar__section">
			<div class="dsidebar__title">
				{{ section.section }}
			</div>
			<div class="dsidebar__list">
				<g-link
					:to="`/${route}/${item.slug}`"
					v-for="item in section.topics"
					:key="`${route}-${item.name}`"
					class="dsidebar__item"
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
