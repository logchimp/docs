<template>
	<Layout>
		<div class="static-layout">
			<header class="static-layout-header">
				<h3 class="static-layout-heading">Team</h3>
				<p class="small-text">
					The development of LogChimp and its ecosystem is guided by the awesome
					people, some of whom have chosen to be featured below.
				</p>
			</header>
			<div class="static-layout-section">
				<div class="team">
					<div v-for="item in team" :key="item.id" class="team-item">
						<g-image :alt="item.name" :src="item.avatar" />
						<h5>{{ item.name }}</h5>
						<p>{{ item.title }}</p>
						<div class="team-item-links">
							<a :href="`https://www.github.com/${item.github}`">
								<github-icon />
							</a>
							<a :href="`https://www.twitter.com/${item.twitter}`">
								<twitter-icon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import { Github as GithubIcon, Twitter as TwitterIcon } from "lucide-vue";

// data
import Team from "../../data/team.yml";

export default {
	name: "TeamPage",
	computed: {
		team() {
			return Team;
		}
	},
	components: {
		GithubIcon,
		TwitterIcon
	}
}
</script>
