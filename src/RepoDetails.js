import React from 'react'

export const RepoDetails = ({ repoDetails }) => {
  const { full_name, name, id, open_issues, description, html_url, contributors = [] } = repoDetails;
  return (
    <section className="repo-details-container">
    <ol>
      {Object.keys(repoDetails) ? (<h3>Project {name}</h3>) : (<h3>{'Click on any project in the list to load it\'s info'}</h3>)}
      <div>
        <p>Full name: {full_name}</p>
        <p>Id: {id}</p>
        <p>Issues: {open_issues}</p>
        <p>
          Description:<br/>
          {description}
        </p>
        <p>
          Details:
          <br/>
          <a href={html_url} target="_blank">See details</a>
        </p>

        <div>
          Contributors:
          <div>
            {contributors.map(c => (
            <div key={c.id} className="contributor-container">
              <img className="avatar" src={c.avatar_url} alt=""/>
              <div>
                <p>Login: {c.login}<br/></p>
                <p>Contributions: {c.contributions}</p>
                <a href={c.html_url}>See contributor's github<br/></a>
              </div>
            </div>
            ))}
        </div>
        </div>
      </div>
    </ol>
  </section>
  )
}

export default RepoDetails;
