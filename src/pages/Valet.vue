<template>
	<Layout>
		<div class="valet-page">
			<div class="valet-page-bg">
				<div class="inner">
					<div v-if="showCheckoutSuccess" class="valet-success">
						Thank you for purchasing LogChimp VALET plan. Our team will get back to within 24-48 hours.
					</div>
					<h2
						class="valet-strap-heading"
					>
						LogChimp
						<span class="valet-strap-tag" style="color: #ee6352">VALET</span>
					</h2>

						<p class="small-text">
						Get a full, self-hosted install configured and supported by the
						LogChimp team, on your own infrastructure
					</p>
				</div>

				<div id="error-message"></div>

				<div class="checkout-plan">
					<div class="checkout-plan-item">
						<div class="plan-name">
							standard
						</div>

						<div class="plan-price">
							<div class="plan-price-value">
								$99
							</div>
							<div class="plan-price-duration">
								/mo
							</div>
						</div>

						<div class="check-list">
							<div class="check-list-item">
								<check-icon />
								<p><strong>Standard LogChimp install</strong> on DigitalOcean</p>
							</div>
							<div class="check-list-item">
								<check-icon />
								<p><strong>Free</strong> $100 hosting credits</p>
							</div>
							<div class="check-list-item">
								<check-icon />
								<p><strong>SSL</strong> with Let's Encrypt</p>
							</div>
							<div class="check-list-item">
								<check-icon />
								<p><strong>Monthly</strong> software updates</p>
							</div>
						</div>

						<div class="button button-primary plan-button" @click="standardPlan">
							Get started
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import { Check as CheckIcon } from "lucide-vue";

export default {
	name: "ValetPage",
	data() {
		return {
			showCheckoutSuccess: false,
			checkoutErrorMessage: "",
			price: {
				standard: {
					id: "price_1IV8izGOTd7mZjviFDBdjwZF"
				}
			}
		};
	},
	components: {
		CheckIcon
	},
	methods: {
		standardPlan() {
			var stripe = Stripe("pk_live_DLEhVwauymdEAIPdN07BsLEx00hNZ8kcwt");
			stripe
				.redirectToCheckout({
					lineItems: [
						{
							price: this.price.standard.id,
							quantity: 1
						}
					],
					mode: "subscription",
					successUrl: "https://logchimp.codecarrot.net/valet?stripe=success",
					cancelUrl: "https://logchimp.codecarrot.net/valet?stripe=cancel"
				})
				.then(function(result) {
					if (result.error) {
						this.checkoutErrorMessage = result.error.message;
					}
				});
		}
	},
	mounted() {
		if (this.$route.query.stripe === "success") {
			this.showCheckoutSuccess = true;

			setTimeout(() => {
				this.showCheckoutSuccess = false;
				this.$router.push("/valet");
			}, 3000);
		}
	},
	metaInfo: {
		title: "LogChimp Valet - Premium Support, Updates & Maintenance",
		meta: [
			{
				name: "description",
				content:
					"Support from the creators of LogChimp to easily install the latest software, keep it up to date, secure, and fast. Both one-off service & ongoing maintenance."
			},
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/valet/"
			},

			// Google
			{
				itemprop: "description",
				content:
					"Support from the creators of LogChimp to easily install the latest software, keep it up to date, secure, and fast. Both one-off service & ongoing maintenance."
			},

			// Facebook
			{
				property: "og:title",
				content: "LogChimp Valet - Premium Support, Updates & Maintenance"
			},
			{
				property: "og:description",
				content:
					"Support from the creators of LogChimp to easily install the latest software, keep it up to date, secure, and fast. Both one-off service & ongoing maintenance."
			},
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/valet/"
			},

			// Twitter
			{
				name: "twitter:title",
				content: "LogChimp Valet - Premium Support, Updates & Maintenance"
			},
			{
				name: "twitter:description",
				content:
					"Support from the creators of LogChimp to easily install the latest software, keep it up to date, secure, and fast. Both one-off service & ongoing maintenance."
			},
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/valet/"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/valet/"
			}
		],
		script: [
			{
				async: true,
				src: "//js.stripe.com/v3"
			}
		]
	}
};
</script>
