<template>
	<div class="sponsor-strap">
		<div class="sponsor-strap-content">
			<div class="sponsor-strap-heading">
				<heart-icon />
				<h5>Sponsor</h5>
			</div>
			<p class="small-text">Support the development of LogChimp.</p>
		</div>
		<div class="sponsor-strap-cta">
			<Button @click="sponsorButton" type="primary">
				Sponsor
			</Button>
		</div>
	</div>
</template>

<script>
// packages
import { Heart as HeartIcon } from "lucide-vue";

// components
import Button from "../components/Button";

export default {
	name: "SponsorStrap",
	components: {
		Button,

		// icons
		HeartIcon
	},
	methods: {
		sponsorButton() {
			window.location.href = "https://www.patreon.com/mittalyashu"
		}
	}
}
</script>
