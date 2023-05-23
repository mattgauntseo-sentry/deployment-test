import {Octokit} from '@octokit/rest';

const owner = "mattgauntseo-sentry";
const repo = "deployment-test";
const ref = "12345";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function run() {
  await octokit.rest.repos.createDeployment({
    owner,
    repo,
    ref,
  });
}

run();
