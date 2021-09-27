<template>
	<Layout>
		<div class="inner-max">
			<div class="static-layout">
				<header class="static-layout-header">
					<h3 class="static-layout-heading">Team</h3>
					<p class="small-text">
						The development of LogChimp and its ecosystem is guided by the
						awesome people, some of whom have chosen to be featured below.
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
	},
	// Meet the Team
	metaInfo: {
		title: "Meet the Team",
		meta: [
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/team"
			},
			// Facebook
			{
				property: "og:title",
				content: "Meet the Team"
			},
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/team"
			},

			// Twitter
			{
				name: "twitter:title",
				content: "Meet the Team"
			},
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/team"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/team"
			}
		]
	}
};
</script>
