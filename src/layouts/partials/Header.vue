<template>
	<header>
		<div class="header__wrapper">
			<div class="header__navbar">
				<logo />
			</div>
			<div class="header__action">
				<Button @click="githubRepository" type="outline">
					<template #icon>
						<github-icon width="1.5rem" height="1.5rem" fill="#1A1A1A" />
					</template>
					GitHub
				</Button>
			</div>
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
