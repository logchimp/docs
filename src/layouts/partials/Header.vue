<template>
	<header class="header">
		<div class="header__navbar">
			<logo class="header__logo" />
			<div class="navbar__list">
				<g-link to="/product" class="navbar__item">
					Product
				</g-link>
				<g-link to="/docs" class="navbar__item">
					Developers
				</g-link>
				<g-link to="/resources" class="navbar__item">
					Resources
				</g-link>
			</div>
		</div>
		<div class="header__action">
			<primary-button>
				Get started now
			</primary-button>
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
