module.exports = {
	siteName: "LogChimp",
	siteDescription: "Track user feedback to build better products",
	siteUrl: "https://logchimp.codecarrot.net/",
	titleTemplate: "%s | LogChimp",

	plugins: [
		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "DocPage",
				baseDir: "./docs",
				pathPrefix: "/docs",
				template: "./src/templates/Docs.vue",
				index: ["readme"]
			}
		},
		{
			use: "@gridsome/vue-remark",
			options: {
				typeName: "ApiPage",
				baseDir: "./api",
				pathPrefix: "/api",
				template: "./src/templates/Api.vue",
				index: ["readme"]
			}
		}
	],
	transformers: {
		remark: {
			plugins: [
				"@gridsome/remark-prismjs"
			]
		}
	}
}
