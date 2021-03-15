const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({});

module.exports = function(api) {
	api.loadSource(async ({ addCollection }) => {
		const githubLogChimpRepository = await octokit.repos.get({
			owner: "logchimp",
			repo: "logchimp"
		});

		const logchimpRepositoryCollection = addCollection({
			typeName: "logchimpRepository"
		});

		logchimpRepositoryCollection.addNode({
			...githubLogChimpRepository.data
		});
	});
};
