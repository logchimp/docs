<template>
	<footer>
		<div class="inner">
			<sponsor-strap />
			<div class="footer-container">
				<div class="footer-col">
					<logo />
					<p class="small-text">
						© Copyright {{ new Date().getFullYear() }} CodeCarrot, Inc
					</p>
				</div>

				<div class="footer-col">
					<nav class="footer-nav">
						<g-link class="footer-link" to="/partners"> Partners </g-link>
						<g-link class="footer-link" to="/docs"> Docs </g-link>
					</nav>
				</div>

				<div class="footer-col">
					<div class="footer-social">
						<a
							href="https://github.com/logchimp/logchimp"
							class="footer-col-item"
						>
							<img src="@/assets/images/github.svg" alt="GitHub icon" />
						</a>
						<a href="https://discord.gg/A7mztcC" class="footer-col-item">
							<img src="@/assets/images/discord.svg" alt="Discord icon" />
						</a>
						<a href="https://twitter.com/logchimp" class="footer-col-item">
							<img src="@/assets/images/twitter.svg" alt="Twitter icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
// components
import Logo from "../../components/Logo";
import SponsorStrap from "../../components/SponsorStrap";

export default {
	name: "SmallFooter",
	components: {
		Logo,
		SponsorStrap
	}
};
</script>
