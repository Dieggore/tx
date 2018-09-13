import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './Layout';

let props;

beforeAll(() => {
   props = {
    actions: {
      loadRepos: () => {},
      loadRepoDetails: () => {}
    },
    repositories: [],
    repoDetails: { contributors: [] }
  }
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Layout {...props} />, div);
});
