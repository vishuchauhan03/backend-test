require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const githubData = {
  login: "vishuchauhan03",
  id: 81008239,
  node_id: "MDQ6VXNlcjgxMDA4MjM5",
  avatar_url: "https://avatars.githubusercontent.com/u/81008239?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/vishuchauhan03",
  html_url: "https://github.com/vishuchauhan03",
  followers_url: "https://api.github.com/users/vishuchauhan03/followers",
  following_url:
    "https://api.github.com/users/vishuchauhan03/following{/other_user}",
  gists_url: "https://api.github.com/users/vishuchauhan03/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/vishuchauhan03/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/vishuchauhan03/subscriptions",
  organizations_url: "https://api.github.com/users/vishuchauhan03/orgs",
  repos_url: "https://api.github.com/users/vishuchauhan03/repos",
  events_url: "https://api.github.com/users/vishuchauhan03/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/vishuchauhan03/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "vishal chauhan",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-03-20T07:37:36Z",
  updated_at: "2025-07-12T08:16:42Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
