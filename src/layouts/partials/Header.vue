<template>
	<header class="header">
		<div :class="[fullWidth ? 'inner-full' : 'inner-max']">
			<div class="header-wrapper">
				<logo />
				<nav class="header-navbar">
					<g-link to="/docs" class="navbar-item"> Docs </g-link>
					<g-link to="/features" class="navbar-item"> Features </g-link>
					<g-link class="button button-primary" to="/get-started"> Get started </g-link>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
// components
import Logo from '../../components/Logo'

export default {
	name: 'Header',
	components: {
		Logo,
	},
	props: {
		fullWidth: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
