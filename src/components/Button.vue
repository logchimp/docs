<template>
	<div class="button" :class="[`button-${type}`]" @click="$emit('click')">
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
