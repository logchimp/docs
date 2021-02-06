<template>
	<div class="blockquote" :class="{
		'blockquote-tip': type === 'tip',
		'blockquote-warning': type === 'warning',
		'blockquote-alert': type === 'alert'
	}">
		<p class="blockquote-type"
			:style="{
				color: typeColor
			}"
		>
			{{ type }}
		</p>
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
	},
	computed: {
		typeColor() {
			switch (this.type) {
				case "warning":
					return "#E8BD43";
				case "alert":
					return "#DE544E";
				case "tip":
				default:
					return "#579672";
			}
		}
	}
}
</script>
