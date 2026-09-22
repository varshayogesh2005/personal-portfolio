import { useEffect, useState } from "react";

function GitHub() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/varshayogesh2005")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data.");
        }

        return response.json();
      })
      .then((data) => {
        setGithubData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="github-section">
        <h2>GitHub Information</h2>
        <p>Loading GitHub information...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="github-section">
        <h2>GitHub Information</h2>
        <p className="form-error">{error}</p>
      </section>
    );
  }

  return (
    <section className="github-section">
      <h2>GitHub Information</h2>

      <div className="github-card">
        <p>
          <strong>Username:</strong> {githubData.login}
        </p>

        <p>
          <strong>Name:</strong>{" "}
          {githubData.name || "Not available"}
        </p>

        <p>
          <strong>Public Repositories:</strong>{" "}
          {githubData.public_repos}
        </p>

        <p>
          <strong>Followers:</strong> {githubData.followers}
        </p>

        <a
          href={githubData.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Visit GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default GitHub;