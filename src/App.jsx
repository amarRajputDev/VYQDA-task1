import { useState } from "react";

export default function App() {
  const [rows, setRows] = useState([
    { task: "Onboarding Call", col2: "", col3: "", col4: "", col5: "" },
    { task: "Google Search Console Access", col2: "", col3: "", col4: "", col5: "" },
    { task: "Google Analytics Access", col2: "", col3: "", col4: "", col5: "" },
    { task: "Website Access", col2: "", col3: "", col4: "", col5: "" },
    { task: "Technical Audit", col2: "", col3: "", col4: "", col5: "" },
    { task: "Anchor Text and Semantic Analysis", col2: "", col3: "", col4: "", col5: "" },
    { task: "Competitor Analysis", col2: "", col3: "", col4: "", col5: "" },
    { task: "Anchor Text / URL Mapping", col2: "", col3: "", col4: "", col5: "" },
    { task: "Google Data Studio Report + Local Reporting Suite", col2: "", col3: "", col4: "", col5: "" },
    { task: "Site Level Optimization", col2: "", col3: "", col4: "", col5: "" },
    { task: "On Page Optimization", col2: "", col3: "", col4: "", col5: "" },
    { task: "Content Creation", col2: "", col3: "", col4: "", col5: "" },
    { task: "Content Publishing", col2: "", col3: "", col4: "", col5: "" },
    { task: "Premium Press Release", col2: "", col3: "", col4: "", col5: "" },
    { task: "Authority Niche Placements", col2: "", col3: "", col4: "", col5: "" },
    { task: "Review Management", col2: "", col3: "", col4: "", col5: "" },
    { task: "Index Links", col2: "", col3: "", col4: "", col5: "" },
    { task: "Video Recap", col2: "", col3: "", col4: "", col5: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleSubmit = () => {
    console.log("Data ready to POST:", rows);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">MONTH 1</h1>

      <div className="overflow-x-auto w-full max-w-7xl shadow-2xl rounded-lg bg-white">
        <table className="min-w-full table-fixed border border-gray-300">
          <thead>
            <tr className="bg-purple-300 text-gray-700 text-lg">
              <th className="border border-gray-300 py-4 px-6 text-left">Task</th>
              <th className="border border-gray-300 py-4 px-6 text-left">Column 2</th>
              <th className="border border-gray-300 py-4 px-6 text-left">Column 3</th>
              <th className="border border-gray-300 py-4 px-6 text-left">Column 4</th>
              <th className="border border-gray-300 py-4 px-6 text-left">Column 5</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-purple-50">
                <td className="border border-gray-300 py-3 px-6 font-medium text-gray-700">{row.task}</td>
                <td className="border border-gray-300 py-3 px-6">
                  <input
                    type="text"
                    placeholder="..."
                    value={row.col2}
                    onChange={(e) => handleChange(index, "col2", e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-gray-700 py-2"
                  />
                </td>
                <td className="border border-gray-300 py-3 px-6">
                  <input
                    type="text"
                    placeholder="..."
                    value={row.col3}
                    onChange={(e) => handleChange(index, "col3", e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-gray-700 py-2"
                  />
                </td>
                <td className="border border-gray-300 py-3 px-6">
                  <input
                    type="text"
                    placeholder="..."
                    value={row.col4}
                    onChange={(e) => handleChange(index, "col4", e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-gray-700 py-2"
                  />
                </td>
                <td className="border border-gray-300 py-3 px-6">
                  <input
                    type="text"
                    placeholder="..."
                    value={row.col5}
                    onChange={(e) => handleChange(index, "col5", e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-gray-700 py-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button 
        onClick={handleSubmit}
        className="mt-10 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all text-lg"
      >
        Submit Data
      </button>
    </div>
  );
}
