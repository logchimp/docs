<template>
	<header>
		<div class="header__wrapper">
			<div class="header__navbar">
				<logo />
			</div>
			<div class="header__action">
			</div>
		</div>
	</header>
</template>

<script>
// components
import Logo from "../../components/Logo";

export default {
	name: "Header",
	components: {
		Logo
	},
};
</script>
