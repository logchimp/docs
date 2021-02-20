<template>
	<header class="header">
		<div class="header-wrapper">
			<logo />
			<nav class="header-navbar">
				<g-link to="/docs" class="navbar-item"> Docs </g-link>
				<g-link to="/features" class="navbar-item"> Features </g-link>
				<Button @click="$router.push('/get-started')" type="primary">
					Get started
				</Button>
			</nav>
		</div>
	</header>
</template>

<script>
// components
import Logo from "../../components/Logo";
import Button from "../../components/Button";

export default {
	name: "Header",
	components: {
		Logo,
		Button
	}
};
</script>
