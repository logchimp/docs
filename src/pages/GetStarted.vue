<template>
	<Layout>
		<div class="get-started">
			<h1>How do you want to get started?</h1>

			<div class="card get-started-product">
				<server-icon stroke="#f56565" width="2.5rem" height="2.5rem" />
				<h1>Self-Managed</h1>
				<p>Download and try our open source self-hosted version.</p>

				<Button @click="$router.push('/download')" type="primary">
					Download
				</Button>

				<div class="check-list">
					<div class="check-list-item">
						<check-icon />
						<p>Fully-featured LogChimp instance</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import { Server as ServerIcon, Check as CheckIcon } from "lucide-vue";

// components
import Button from "../components/Button";

export default {
	name: "GetStartedPage",
	components: {
		// components
		Button,

		// icons
		ServerIcon,
		CheckIcon
	}
}
</script>
