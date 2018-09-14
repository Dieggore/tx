import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect }  from 'react-redux'
import sortBy from 'lodash.sortby';

import { loadRepos, loadRepoDetails } from './actions'
import RepoDetails from './RepoDetails'

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }
  componentDidMount() {
    this.props.actions.loadRepos();
  }

  loadDetails = (e) => this.props.actions.loadRepoDetails(e.currentTarget.attributes.name.value);

  onChangeSearch = search => this.setState({ search });

  render() {
    const { repositories, repoDetails } = this.props;
    const { search } = this.state;

    const sortedRepos = sortBy(repositories, ['watchers']).filter(repo => filterRepos(repo, search)).reverse();

    // I could have abstracted this to it's own component.
    // I left it this way to show this is another alternative...
    const ListItems = (repo) => (
      <li key={repo.id} className="li-project" name={repo.name} onClick={this.loadDetails}>
        Name:&nbsp;&nbsp;<span>{repo.name}</span>
        <br/>
        Watchers count: <span>{repo.watchers_count}</span>
      </li>
    )

    return (
      <div className="container" >
        <section>
          <ol>
            {repositories.length ? (<h3>List of facebook projects</h3>) : (<h3>Loading repos...</h3>)}
            <div className="search-container">
              <span>&#9906;</span>
              <input type="text" className="search-input" value={this.state.search} placeholder="Search projects by name" onChange={e => this.onChangeSearch(e.target.value)}/>
            </div>
            {sortedRepos.map(ListItems)}
          </ol>
        </section>
        <RepoDetails repoDetails={repoDetails} />
      </div>
    )}
}

const filterRepos = (repo, search) =>
  !search ?
    repo :
    repo.name
      .toLowerCase()
      .indexOf(search.toLowerCase()) >= 0 ?
      repo :
      null;

const mapStateToProps = state => {
  const { repositories, repo } = state.repositoriesReducer;
  return { repositories: repositories, repoDetails: repo }
}

const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ loadRepos, loadRepoDetails }, dispatch) })

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
