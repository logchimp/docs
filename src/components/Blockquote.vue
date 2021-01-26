<template>
	<div class="blockquote" :class="{
		'blockquote-tip': type === 'tip',
		'blockquote-warning': type === 'warning',
		'blockquote-alert': type === 'alert'
	}">
		<div class="blockquote-content">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: "Blockquote",
	props: {
		type: {
			type: String,
			default: "tip",
			validator: (value) => {
				return ["tip", "warning", "alert"].includes(value)
			}
		}
	}
}
</script>
