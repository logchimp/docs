<template>
	<Layout>
		<div class="container">
			<div class="partners">
				<div class="partners-header">
					<h3>LogChimp partners</h3>
					<p>
						As a Non-Profit Open Source company we are incredibly grateful to
						companies who provide services to support our ongoing work.
					</p>
				</div>

				<hr />

				<div class="partners-list">
					<div
						:key="partner.id"
						v-for="partner in partners"
						class="partners-list-item"
					>
						<a :href="`${partner.link}?utm_source=website&utm_medium=referral&company=logchimp`">
							<img :src="partner.image" :alt="partner.title" :title="partner.title" />
						</a>
						<p>
							{{ partner.description }}
						</p>
					</div>
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
