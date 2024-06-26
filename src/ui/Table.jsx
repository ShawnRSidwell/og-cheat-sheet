function Table({ data }) {
  if (data.length === 0) return;
  return (
    <div className="relative overflow-x-auto sm:rounded-lg ml-2 md:ml-5">
      <table className="text-sm text-left shadow-lg text-gray-500 ">
        <thead className="text-xs text-gray-800 uppercase  bg-blue-50 border">
          <tr>
            <th scope="col" className="px-1 py-3 border">
              Rec
            </th>
            <th scope="col" className="px-2 py-3 border ">
              Name
            </th>
            <th scope="col" className="px-2 py-3 border ">
              Type
            </th>
            <th scope="col" className="px-2 py-3 border ">
              Body
            </th>
            <th scope="col" className="px-2 py-3 pr-[300px] md:pr-32 border">
              Quick Description
            </th>
            <th
              scope="col"
              className="pl-2 pr-[1500px] md:pr-32 text-left border"
            >
              Full Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((wine) => (
            <TableRow
              key={wine.Name}
              name={wine.Name}
              recommended={wine.Recommend}
              type={wine["Wine Type"]}
              body={wine.Body}
              shortDesc={wine.Description}
              fullDesc={wine["Full Description"]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ recommended, name, type, shortDesc, body, fullDesc }) {
  return (
    <tr className="border-b border-gray-200  hover:bg-blue-50">
      <th scope="row" className="px-3 py-1 font-medium text-gray-900  border">
        {recommended === "x" ? "🍷" : ""}
      </th>
      <td className="px-2 py-1 border">{name}</td>
      <td className="px-2 py-1 border ">{type}</td>
      <td className="px-2 py-1 border ">{body}</td>
      <td className="mx-3 px-1 py-2 border ">{shortDesc}</td>
      <td className="px-2 py-1 max-h-32 border	">
        {fullDesc || "Under Construction..."}
      </td>
    </tr>
  );
}

export default Table;
