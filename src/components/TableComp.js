
const TableComp = ({worldStats}) => {
    return (
        <div className="mTable h-96 overflow-auto">
        <table className="w-full text-xs   bg-gray-100 text-center border-solid border border-light-blue-500">
          <tr className="border-solid border border-light-blue-500">
            <th>#</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>New Cases</th>
            <th>Recovered Cases</th>
            <th>Active Cases</th>
            <th>Critical Cases</th>
            <th>Death Cases</th>
            <th>Death / 1m Pop</th>
            <th>Cases / 1m Pop</th>
          </tr>

          {worldStats.map((val, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{val.country}</td>
              <td>{val.cases.total}</td>
              <td className="text-red-500">{val.cases.new}</td>
              <td className="text-green-500">{val.cases.recovered}</td>
              <td>{val.cases.active}</td>
              <td>{val.cases.critical}</td>
              <td>{val.deaths.total}</td>
              <td>{val.deaths['1M_pop']}</td>
              <td>{val.cases['1M_pop']}</td>
            </tr>
          ))}
        </table>
      </div>
    )
}

export default TableComp
