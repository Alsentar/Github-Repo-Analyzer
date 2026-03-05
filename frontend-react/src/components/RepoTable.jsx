
function RepoTable({ repos }) {

  return (
    <div id="repospace">

      <table>

        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estrellas</th>
          </tr>
        </thead>

        <tbody>

          {repos.map((repo, index) => (

            <tr key={index}>
              <td>{repo.name}</td>
              <td>{repo.stars}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );

}

export default RepoTable;