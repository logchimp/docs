<template>
	<header>
		<div class="inner">
			<div class="header__wrapper">
				<div class="header__navbar">
					<g-link class="header__logo" to="/">
						<img src="@/assets/images/logo_with_name.svg" alt="LogChimp logo">
					</g-link>
					<nav class="navbar">
						<!-- <g-link to="/product" class="navbar__item">
							Product
						</g-link> -->
						<g-link to="/docs/" class="navbar__item"> Developers </g-link>
						<!-- <g-link to="/resources" class="navbar__item">
							Resources
						</g-link> -->
					</nav>
				</div>
				<div class="header__action">
					<Button type="primary"> Get started now </Button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
// components
import Button from "../../components/Button";

export default {
	name: "Header",
	components: {
		Button,
	},
};
</script>
