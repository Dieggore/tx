import { call, put, takeLatest } from 'redux-saga/effects'
import { loadFacebookRepos, loadRepoDetails } from './api'
import {
  LOAD_REPOS_FAILED,
  LOAD_REPOS_SUCCEDED,
  LOAD_REPOS_REQUEST,
  LOAD_REPO_DETAILS_REQUEST,
  LOAD_REPO_DETAILS_SUCCEDED,
  LOAD_REPO_DETAILS_FAILED
} from './actions'

function* loadRepo(action) {
  try {
    const repositories = yield call(loadFacebookRepos);
    yield put({ type: LOAD_REPOS_SUCCEDED, repositories });
  } catch (e) {
    yield put({ type: LOAD_REPOS_FAILED, error: e.message });
  }
}

function* requestRepoDetails(action) {
  try {
    const repoContributors = yield call(loadRepoDetails, action.name);
    yield put({ type: LOAD_REPO_DETAILS_SUCCEDED, repoContributors });
  } catch (e) {
    console.log(e.message);
    yield put({ type: LOAD_REPO_DETAILS_FAILED, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(LOAD_REPOS_REQUEST, loadRepo);
  yield takeLatest(LOAD_REPO_DETAILS_REQUEST, requestRepoDetails)
}

export default mySaga;
