<template>
	<Layout>
		<div class="static-layout">
			<header class="static-layout-header">
				<h2 class="static-layout-heading">Partners</h2>
				<p class="small-text">
					As a Non-Profit open-source organization, we are incredibly grateful
					to companies who provide services to support our ongoing work.
				</p>
			</header>

			<div class="partners-list">
				<div
					:key="partner.id"
					v-for="partner in partners"
					class="partners-list-item"
				>
					<a
						:href="`${partner.link}?utm_source=website&utm_medium=referral&company=logchimp`"
					>
						<img
							:src="partner.image"
							:alt="partner.title"
							:title="partner.title"
						/>
					</a>
					<p>
						{{ partner.description }}
					</p>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
// data
import Partners from "../../data/partners.yml";

export default {
	name: "Partners",
	metaInfo: {
		title: "Partners",
		description:
			"LogChimp is a non-profile organization we're very happy to partner with companies who are able to provide LogChimp with credit, goods and services which help us build free, open software for everyone.",
	},
	computed: {
		partners() {
			return Partners;
		},
	},
};
</script>
