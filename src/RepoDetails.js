import React, { Fragment } from 'react'

export const RepoDetails = ({ repoDetails }) => {
  const { full_name, name, id, open_issues, description, html_url, contributors = [] } = repoDetails;

  return (
    <section className="repo-details-container">
      <ol>
      {!repoDetails.full_name ?
        (<h3 className="click-instruction">{'<-- Click on any project in the list to load it\'s info...'}</h3>) :
        (<Fragment>
          <h3>Project {name}</h3>
            <div>
              <p>Full name: {full_name}</p>
              <p>Id: {id}</p>
              <p>Issues: {open_issues}</p>
              <p>Description:<br/>{description}</p>
              <p>Details:<br/>
                <a href={html_url} target="_blank">Open details in new tab...</a>
              </p>
            </div>
            <div>
            Contributors:
            <div className="contributors-layout">
              {contributors.length <= 0 && <div>No contributors found</div>}
              {contributors.map(c => (
                <div key={c.id} className="contributor-container">
                  <img className="avatar" src={c.avatar_url} alt=""/>
                    <p>Login: {c.login}<br/></p>
                    <p>Contributions: {c.contributions}</p>
                    <a href={c.html_url} target="_blank">See contributor's github<br/></a>
                </div>
              ))}
            </div>
            </div>
         </Fragment>)
      }
      </ol>
    </section>
  )
}

export default RepoDetails;
