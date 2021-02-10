<template>
	<div class="inner">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script>
// components
import Header from "../layouts/partials/Header";
import Footer from "../layouts/partials/SmallFooter";

export default {
	name: "Default",
	components: {
		Header,
		Footer
	},
	metaInfo: {
		meta: [
			{
				name: "robots",
				content: "index, follow"
			}
		]
	}
}
</script>
