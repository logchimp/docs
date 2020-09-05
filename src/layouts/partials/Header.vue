<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__navbar">
					<g-link to="/">
						<logo class="header__logo" />
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

// icons
import Logo from "../../assets/images/logo";

export default {
	name: "Header",
	components: {
		Button,
		Logo,
	},
};
</script>
