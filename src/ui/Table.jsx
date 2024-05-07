function Table({ data }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-1 py-3 bg-gray-50 dark:bg-gray-800 border-2"
            >
              Fav
            </th>
            <th scope="col" className="px-2 py-3 border-2">
              Name
            </th>
            <th
              scope="col"
              className="px-2 py-3 bg-gray-50 dark:bg-gray-800 border-2"
            >
              Type
            </th>
            <th scope="col" className="px-2 py-3 border-2">
              Body
            </th>
            <th scope="col" className="px-2 py-3 border-2">
              Quick Description
            </th>
            <th scope="col" className="px-6 py-3 border-2">
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
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
      >
        {recommended}
      </th>
      <td className="px-2 py-2">{name}</td>
      <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">{type}</td>
      <td className="px-2 py-2 bg-gray-50 dark:bg-gray-800">{body}</td>
      <td className="mx-3 px-1 py-2">{shortDesc}</td>
      <td className="px-6 py-2 bg-gray-50 dark:bg-gray-800">{fullDesc}</td>
    </tr>
  );
}

export default Table;
