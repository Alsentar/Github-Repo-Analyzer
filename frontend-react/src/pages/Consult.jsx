
import { useEffect, useState } from "react";
import RepoTable from "../components/RepoTable";
import "../components/ConsultStyle.css";

function Consulta() {

  const [username, setUsername] = useState("");
  const [repoCount, setRepoCount] = useState(0);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    loadGitHubData();
  }, []);

  async function loadGitHubData() {

    try {

      const response = await fetch("/api/github");
      const data = await response.json();

      setUsername(data.username);
      setRepoCount(data.repoCount);
      setRepos(data.repos);

    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }

  }

  return (
    <div>

      <h2>Nombre de usuario:</h2>
      <h3>{username}</h3>

      <h2>Número de repositorios:</h2>
      <h4>{repoCount}</h4>

      <RepoTable repos={repos} />

    </div>
  );
}

export default Consulta;