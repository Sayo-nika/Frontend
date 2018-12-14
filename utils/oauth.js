export default [
  {
    name: 'GitHub',
    icon: 'mdi-github-circle',
    url: `https://github.com/login/oauth/authorize?client_id=${process.env.oauth.github}&redirect_uri=${process.env.oauth.githubRedirect}&scopes=read:user%20user:email`,
    colour: 'grey darken-3',
    textColour: 'grey--text text--darken-3'
  },
  {
    name: 'GitLab',
    icon: 'mdi-gitlab',
    url: `https://gitlab.com/oauth/authorize?client_id=${process.env.oauth.gitlab}&redirect_uri=${process.env.oauth.gitlabRedirect}&response_type=code&scope=read_user`,
    colour: 'orange darken-2',
    textColour: 'orange--text text--darken-2'
  },
  {
    name: 'Reddit',
    icon: 'mdi-reddit',
    url: `https://www.reddit.com/api/v1/authorize?client_id=${process.env.oauth.reddit}&response_type=code&redirect_uri=${process.env.oauth.redditRedirect}&duration=temporary&scope=identity&state=temp`,
    colour: 'deep-orange',
    textColour: 'deep-orange--text'
  },
  {
    name: 'Discord',
    icon: 'mdi-discord',
    url: `https://discordapp.com/api/oauth2/authorize?client_id=${process.env.oauth.discord}&redirect_uri=${process.env.oauth.discordRedirect}&response_type=code&scope=email%20identify`,
    colour: 'blue lighten-1',
    textColour: 'blue--text text--lighten-1'
  }
];
