export const LOAD_REPOS_REQUEST = 'LOAD_REPOS_REQUEST';
export const LOAD_REPOS_SUCCEDED = 'LOAD_REPOS_SUCCEDED';
export const LOAD_REPOS_FAILED = 'LOAD_REPOS_FAILED';

export const LOAD_REPO_DETAILS_REQUEST = 'LOAD_REPO_DETAILS_REQUEST';
export const LOAD_REPO_DETAILS_SUCCEDED = 'LOAD_REPO_DETAILS_SUCCEDED';
export const LOAD_REPO_DETAILS_FAILED = 'LOAD_REPO_DETAILS_FAILED';

export const loadRepos = (name) => ({ type: LOAD_REPOS_REQUEST, name });
export const loadRepoDetails = (name) => ({ type: LOAD_REPO_DETAILS_REQUEST, name });
