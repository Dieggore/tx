import React from 'react';
import ReactDOM from 'react-dom';
import { RepoDetails } from './RepoDetails';

let props;

beforeAll(() => {
  props = {
    repoDetails: { contributors: [] }
  }
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoDetails {...props} />, div);
});
