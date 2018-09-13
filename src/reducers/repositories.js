import {
  LOAD_REPO_DETAILS_SUCCEDED,
  LOAD_REPO_DETAILS_FAILED,
  LOAD_REPOS_SUCCEDED,
  LOAD_REPOS_FAILED,
  LOAD_REPOS_REQUEST,
  LOAD_REPO_DETAILS_REQUEST
} from '../actions'

const initialState = {
  fetching: false,
  repositories: [],
  error: null,
  repo: {
    contributors: []
  }
};

const mapReposData = ({ state, action }) => {
  const selectedRepo = state.repositories.find(rep => rep.name === action.name);
  const repo = {...selectedRepo, contributors: []};
  return { ...state, fetching: true, error: null, repo };
}

const mapRepoContributors = ({ state, action }) => {
  const contributors = action.repoContributors;
  const newRepo = { ...state.repo, contributors };
  return { ...state, repo: newRepo };
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_REPOS_REQUEST:
      return { ...state, fetching: true, error: null };
    case LOAD_REPO_DETAILS_REQUEST:
      return mapReposData({ state, action });
    case LOAD_REPOS_SUCCEDED:
      return { ...state, repositories: action.repositories };
    case LOAD_REPOS_FAILED:
      return { ...state, error: action.error };
    case LOAD_REPO_DETAILS_SUCCEDED:
      return mapRepoContributors({ state, action });
    case LOAD_REPO_DETAILS_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}