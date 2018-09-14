import React, { Fragment } from "react";

export const RepoDetails = ({ repoDetails }) => {
  const {
    full_name,
    name,
    id,
    open_issues,
    description,
    html_url,
    contributors = []
  } = repoDetails;

  return (
    <section className="repo-details-container">
      <ol>
        {!repoDetails.full_name ? (
          <h3 className="click-instruction">
            {"<-- Click on any project in the list to load it's info..."}
          </h3>
        ) : (
          <Fragment>
            <h3>Project {name}</h3>
            <div>
              <p>
                <b>Full name:</b>
                {full_name}
              </p>
              <p>
                <b>Id:</b> {id}
              </p>
              <p>
                <b>Issues:</b> {open_issues}
              </p>
              <p>
                <b>Description:</b>
                <br />
                {description}
              </p>
              <p>
                <b>Details:</b>
                <br />
                <a href={html_url} target="_blank">
                  Open details in new tab...
                </a>
              </p>
              <b>Contributors:</b>
            </div>
            <div>
              <div className="contributors-layout">
                {contributors.length <= 0 && <div>No contributors found</div>}
                {contributors.map(c => (
                  <div key={c.id} className="contributor-container">
                    <img className="avatar" src={c.avatar_url} alt="" />
                    <p>
                      <b>Login:</b> {c.login}
                      <br />
                    </p>
                    <p>
                      <b>Contributions:</b> {c.contributions}
                    </p>
                    <a href={c.html_url} target="_blank">
                      See contributor's github
                      <br />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        )}
      </ol>
    </section>
  );
};

export default RepoDetails;
