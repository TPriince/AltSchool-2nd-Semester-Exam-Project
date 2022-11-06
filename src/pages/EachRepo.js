import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EachRepo() {
  const [repo, setRepo] = useState({});
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchRepoInfo() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/repos/TPriince/${param.repoId}`);
        const res = response.json()
            .then(data => setRepo(data))
      } catch (error) {
        console.log(error.message)
      }
        setLoading(false);
    }

    fetchRepoInfo();
  }, [])

  if (loading) {
    return <h4>Loading...</h4>
  }

  return(
    <div className="each-repo">
      <p><b>Name</b>: <b>{param.repoId}</b> repository</p>
      {/* <img src={repo.owner.avatar_url} alt=""/> */}
      {repo.description && <p><b>Description</b>: {repo.description}</p>}
      <p><b>Default branch</b>: {repo.default_branch}</p>
      <p><b>Repository size</b>: {repo.size}KB</p>
      {repo.created_at && <p><b>Created at</b>: {repo.created_at}</p>}
      {repo.language ? <p><b>Language</b>: {repo.language}</p> : ""}
      <p><b>Number of forks</b>: {repo.forks_count}</p>
      <p><b>Visibility</b>: {repo.visibility}</p>
      <button onClick={handleNavigate} className="navigate-btn">Back to home page</button>

    </div>
  )
}