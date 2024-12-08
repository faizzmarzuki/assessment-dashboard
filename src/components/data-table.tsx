import { useState } from "react";
import { SortDown, SortUp, View } from "../const/icons";

interface DataTableProps {
  data: Array<{
    id: number;
    name: string;
    email: string;
    status: string;
    [key: string]: string | number;
  }>;
  columns: string[];
}

export default function DataTable({ data, columns }: DataTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<{ id: number; name: string; email: string; status: string } | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortedData, setSortedData] = useState(data);

  const handleButtonClick = (row: { id: number; name: string; email: string; status: string }) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  const sortData = () => {
    const newSortedData = [...data].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortDirection === "asc" ? -1 : 1;
      if (nameA > nameB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    setSortedData(newSortedData);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full text-xs border border-collapse border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left border border-gray-200">
                {column === "name" ? (
                  <button
                    onClick={sortData}
                    className="flex items-center justify-between w-full focus:outline-none">
                    <span className="mr-1">{column.toUpperCase()}</span>
                    <span>
                      {sortDirection === "asc" ? <SortUp /> : <SortDown />}
                    </span>
                  </button>
                ) : (
                  column.toUpperCase()
                )}
              </th>
            ))}
            <th className="px-4 py-2 text-left border border-gray-200">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border border-gray-200">
                  {column === "status" ? (
                    <span
                      className={` text-white p-1 w-24 font-semibold rounded-xl text- flex justify-center ${
                        row[column].toLowerCase() === "active"
                          ? "bg-green-500 "
                          : "bg-red-500"
                      }`}>
                      {row[column]}
                    </span>
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
              <td className="px-4 py-2 border border-gray-200">
                <button
                  className="p-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  onClick={() => handleButtonClick(row)}>
                  <View />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col justify-between h-48 p-5 bg-white rounded shadow-lg w-96">
            {selectedRow && (
              <>
                <h2 className="text-lg font-bold">
                  {selectedRow.name} Details
                </h2>
                <div className="flex-grow">
                  <p>
                    <strong>Name:</strong> {selectedRow.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedRow.email}
                  </p>
                  <p>
                    <strong>Status:</strong> {selectedRow.status}
                  </p>
                </div>
              </>
            )}
            <button
              className="p-2 mt-4 text-white bg-blue-500 rounded"
              onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
