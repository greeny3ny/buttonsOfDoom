const octokit = require('.')()
octokit.repos.getContent({
  owner: 'octokit',
  repo: 'rest.js',
  path: 'examples/getContent.js'
})

  .then(result => {
    // content will be base64 encoded
    const content = Buffer.from(result.data.content, 'base64').toString()
    console.log(content)
  })