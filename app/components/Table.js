import React from "react";

function Table() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <h2>Recent Activity</h2>
        <span>See More</span>
      </div>
      <div className="w-full  overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr className="bg-gray-600 text-white ">
              <th>ID</th>
              <th className="p-4">Customers Name</th>
              <th className="p-4">BVN</th>
              <th className="p-4">Status</th>
              <th className="p-4">Operation Head</th>
              <th className="p-4">Time Submitted</th>
              <th className="p-4">Time of Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                #1147
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                Babalawa Thomas
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                1235467892
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                <div className="border border-green-500 text-green-400 font-bold rounded">
                  Approved
                </div>
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                David James
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:30
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:36
              </td>
            </tr>
            <tr>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                #1147
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                Babalawa Thomas
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                1235467892
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                <div className="border border-green-500 text-green-400 font-bold rounded">
                  Approved
                </div>
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                David James
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:30
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:36
              </td>
            </tr>
            <tr>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                #1147
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                Babalawa Thomas
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                1235467892
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
              <div className="border border-blue-500 text-blue-400 font-bold rounded">Submitted</div>
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                David James
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:30
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:36
              </td>
            </tr>
            <tr>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                #1147
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                Babalawa Thomas
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                1235467892
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
              <div className="border border-red-500 text-red-400 font-bold rounded">Rejected</div>
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                David James
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:30
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:36
              </td>
            </tr>
            <tr>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                #1147
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                Babalawa Thomas
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                1235467892
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
              <div className="border border-blue-500 text-blue-400 font-bold rounded">Submitted</div>
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                David James
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:30
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:36
              </td>
            </tr>
            <tr>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                #1147
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                Babalawa Thomas
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                1235467892
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                <div className="border border-green-500 text-green-400 font-bold rounded">
                  Approved
                </div>
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                David James
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:30
              </td>
              <td className="p-4 px-2 text-center border-b-2 shadow-sm">
                09:36
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
