<template>
	<div class="check-list-item">
		<check-icon />
		<slot />
	</div>
</template>

<script>
// packages
import {
	Check as CheckIcon
} from "lucide-vue";

export default {
	name: "CheckItem",
	components: {
		CheckIcon
	}
}
</script>
