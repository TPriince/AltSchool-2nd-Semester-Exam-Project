import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

export default function Repositories() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getGithubRepos() {
      setLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/TPriince/repos?per_page=100');
        const res = await response.json()
          .then(data => setUser(data));
      } catch (error) {
        console.log(error.message)
      }
        setLoading(false);
    }

    getGithubRepos()
  }, [])

  const PER_PAGE = 5;

  const total = user.length;

  const pages = Math.ceil(total / PER_PAGE);

  const skip = page * PER_PAGE - PER_PAGE;

  const repos = user.slice(skip, skip + PER_PAGE).map((repo, index) => {
    return(
      <ul key={index}>
        <li><NavLink className="link" style={{color: "blue"}} to={`/repos/${repo.name}`}>{`${index + 1}: ${repo.name}`}</NavLink></li>
      </ul>
    )
  })

  if (loading) {
    return <h4>Loading...</h4>
  }

  return(
    <div className="home">
      <h2>My GitHub repositories:</h2>
      <div className="repolist">{repos}</div>

      <button disabled={page <= 1} onClick={() => setPage(page - 1)}>prev</button>
      <p className="pagination">Pages: {page} of {pages}</p>
      <button disabled={page >= pages} onClick={() => setPage(page + 1)}>next</button>

      {Array.from({ length: pages }, (_, index) => index + 1).map((each, index) => {
        return <button onClick={() => setPage(each)} key={index}>{each}</button>
      })}
    </div>
  )
}