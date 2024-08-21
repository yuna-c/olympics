const Table = ({ CountryInfo, onDeleteInfo }) => {
  return (
    <div className='table-group'>
      <table>
        <thead>
          <tr>
            <th>국가별</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </tr>
        </thead>
        <tbody>
          {CountryInfo.map((country) => {
            return (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>
                  <button
                    onClick={() => {
                      onDeleteInfo(country.name);
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
