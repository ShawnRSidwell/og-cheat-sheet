function Table() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            productName='Apple MacBook Pro 17"'
            color="Silver"
            category="Laptop"
            price="$2999"
          />
          <TableRow
            productName="Microsoft Surface Pro"
            color="White"
            category="Laptop PC"
            price="$1999"
          />
          <TableRow
            productName="Magic Mouse 2"
            color="Black"
            category="Accessories"
            price="$99"
          />
          <TableRow
            productName="Google Pixel Phone"
            color="Gray"
            category="Phone"
            price="$799"
          />
          <TableRow
            productName="Apple Watch 5"
            color="Red"
            category="Wearables"
            price="$999"
          />
        </tbody>
      </table>
    </div>
  );
}

function TableRow({ productName, color, category, price }) {
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
      >
        {productName}
      </th>
      <td className="px-6 py-4">{color}</td>
      <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{category}</td>
      <td className="px-6 py-4">{price}</td>
    </tr>
  );
}

export default Table;
