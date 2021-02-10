<template>
	<div class="button" :class="[`button-${type}`]" @click="$emit('click')">
		<div class="button-icon">
			<slot name="icon" />
		</div>
		<slot />
	</div>
</template>

<script>
export default {
	name: "Button",
	props: {
		type: {
			type: String,
			required: true,
		}
	}
};
</script>
