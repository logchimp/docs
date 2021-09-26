<template>
	<Layout>
		<div class="inner-max">
			<div class="static-layout">
				<header class="static-layout-header">
					<h2 class="static-layout-heading">What LogChimp has to offer?</h2>
					<p class="small-text">Compare LogChimp with...</p>
				</header>

				<table class="compare-table">
					<thead>
						<tr>
							<th style="min-width: 200px"></th>
							<th>
								LogChimp<br />
								<small
									style="text-transform: initial; color: #777; font-weight: 400"
								>
									(That's us!)
								</small>
							</th>
							<th>ProductBoard</th>
							<th>UserVoice</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>💻 Open Source</td>
							<td>
								<div class="compare-table-circle" />
							</td>
							<td>
								<div class="compare-table-circle compare-table-circle-0" />
							</td>
							<td>
								<div class="compare-table-circle compare-table-circle-0" />
							</td>
						</tr>
						<tr>
							<td>🏰 Data ownership</td>
							<td><div class="compare-table-circle" /></td>
							<td>
								<div class="compare-table-circle compare-table-circle-50" />
							</td>
							<td>
								<div class="compare-table-circle compare-table-circle-50" />
							</td>
						</tr>
						<tr>
							<td>🌍 Use a custom domain</td>
							<td><div class="compare-table-circle" /></td>
							<td><div class="compare-table-circle" /></td>
							<td><div class="compare-table-circle" /></td>
						</tr>
						<tr>
							<td>🖼 Control your site design</td>
							<td><div class="compare-table-circle" /></td>
							<td>
								<div class="compare-table-circle compare-table-circle-0" />
							</td>
							<td>
								<div class="compare-table-circle compare-table-circle-0" />
							</td>
						</tr>

						<tr>
							<td>🚀 Native REST API</td>
							<td><div class="compare-table-circle" /></td>
							<td>
								<div class="compare-table-circle compare-table-circle-50" />
							</td>
							<td><div class="compare-table-circle" /></td>
						</tr>
						<tr>
							<td>🤝 Decoupled front-end & back-end</td>
							<td><div class="compare-table-circle" /></td>
							<td>
								<div class="compare-table-circle compare-table-circle-0" />
							</td>
							<td>
								<div class="compare-table-circle compare-table-circle-0" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</Layout>
</template>

<script>
export default {
	name: "ComparePage",
	metaInfo: {
		title: "Compare what has to offer LogChimp",
		meta: [
			// {
			// 	name: "description",
			// 	content:
			// 		"Build better products by tracking customer feedback with LogChimp."
			// },
			{
				property: "url",
				content: "https://logchimp.codecarrot.net/compare/"
			},

			// Google
			// {
			// 	itemprop: "description",
			// 	content:
			// 		"Build better products by tracking customer feedback with LogChimp."
			// },

			// Facebook
			{
				property: "og:title",
				content: "Compare what has to offer LogChimp"
			},
			// {
			// 	property: "og:description",
			// 	content:
			// 		"Build better products by tracking customer feedback with LogChimp."
			// },
			{
				property: "og:url",
				content: "https://logchimp.codecarrot.net/compare/"
			},

			// Twitter
			{
				name: "twitter:title",
				content: "Compare what has to offer LogChimp"
			},
			// {
			// 	name: "twitter:description",
			// 	content:
			// 		"Build better products by tracking customer feedback with LogChimp."
			// },
			{
				name: "twitter:url",
				content: "https://logchimp.codecarrot.net/compare/"
			}
		],
		link: [
			{
				rel: "canonical",
				href: "https://logchimp.codecarrot.net/compare/"
			}
		]
	}
};
</script>
