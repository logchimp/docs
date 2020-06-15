<template>
	<header class="header">
		<div class="container">
			<div class="header__wrapper">
				<div class="header__navbar">
					<logo class="header__logo" />
					<nav class="navbar">
						<g-link to="/product" class="navbar__item">
							Product
						</g-link>
						<g-link to="/docs" class="navbar__item">
							Developers
						</g-link>
						<g-link to="/resources" class="navbar__item">
							Resources
						</g-link>
					</nav>
				</div>
				<div class="header__action">
					<primary-button>
						Get started now
					</primary-button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
// components
import PrimaryButton from "../../components/PrimaryButton";

// icons
import Logo from "../../assets/images/logo";

export default {
	name: "Header",
	components: {
		PrimaryButton,
		Logo
	}
};
</script>
