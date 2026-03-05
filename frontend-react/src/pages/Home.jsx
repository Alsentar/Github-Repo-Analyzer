
import { Link } from "react-router-dom";
import "../components/Homestyle.css";

function Home() {
  return (
    <div id="loginconsulta">
      <h1>Consulta de Usuario y Repositorio</h1>

      <Link to="/consult">
        <button>Consultar</button>
      </Link>
    </div>
  );
}

export default Home;