<template>
	<header class="header">
		<div class="header-wrapper">
			<logo />
			<nav class="header-navbar">
				<g-link to="/docs" class="navbar-item">
					Docs
				</g-link>
				<g-link to="/features" class="navbar-item">
					Features
				</g-link>
				<Button @click="githubRepository" type="outline" class="navbar-item">
					<template #icon>
						<github-icon width="1.5rem" height="1.5rem" fill="#1A1A1A" />
					</template>
					GitHub
				</Button>
			</nav>
		</div>
	</header>
</template>

<script>
// components
import Logo from "../../components/Logo";
import Button from "../../components/Button";

// icons
import GithubIcon from "../../components/icons/github";

export default {
	name: "Header",
	components: {
		Logo,
		Button,

		// icons
		GithubIcon
	},
	methods: {
		githubRepository() {
			window.location.href = "https://github.com/logchimp/logchimp"
		}
	}
};
</script>
