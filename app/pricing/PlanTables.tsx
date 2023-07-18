const PlanTables: React.FC = () => {
  return (
    <table className=" w-5/6 mt-4 table-auto">
      <thead>
        <tr className="border-b">
          <th className="text-white font-extrabold text-2xl w-1/5 py-2 px-4">
            Plan Benefits
          </th>
          <th className="text-white font-extrabold text-2xl w-1/5 py-2 px-4">
            Alpha
          </th>
          <th className="text-white font-extrabold text-2xl w-1/5 py-2 px-4">
            Beta
          </th>
          <th className="text-white font-extrabold text-2xl w-1/5 py-2 px-4">
            Omega
          </th>
          <th className="text-white font-extrabold text-2xl w-1/5 py-2 px-4">
            Custom
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="w-1/4 py-2 px-4 text-blue-400">Server</td>
          <td className="text-white w-1/4 py-2 px-4">
            ARM-Linux 4-core CPU, 2GB RAM, 64GB storage, 500GB/s bandwith
          </td>
          <td className="text-white w-1/4 py-2 px-4">
            ARM-Linux 4-core CPU, 4GB RAM, 128GB storage, 1TB/s bandwidth
          </td>
          <td className="text-white w-1/4 py-2 px-4">
            x64 8-Core CPU, up to 8GB RAM, up to 1TB storage, up to 2TB/s
            bandwidth
          </td>
          <td className="text-white w-1/4 py-2 px-4">
            x64 up to 16-core CPU, up to 32GB RAM, up to 4TB storage, up to
            4TB/s bandwidth
          </td>
        </tr>
        <tr className="border-b">
          <td className="w-1/5 py-2 px-4 text-blue-400">Features</td>
          <td className="text-white w-1/5 py-2 px-4">1 Complex Feature*</td>
          <td className="text-white w-1/5 py-2 px-4">
            Up to three complex features*
          </td>
          <td className="text-white w-1/5 py-2 px-4">
            Up to five complex features*
          </td>
          <td className="text-white w-1/5 py-2 px-4">
            Customized number of features
          </td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">
            Search Engine Optimization (SEO)
          </td>
          <td className="text-white w-1/5 py-2 px-4">N/A</td>
          <td className="text-white w-1/5 py-2 px-4">
            Basic implementation and optimization
          </td>
          <td className="text-white w-1/5 py-2 px-4">Greater optimization</td>
          <td className="text-white w-1/5 py-2 px-4">Premium optimization</td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">Technical Support</td>
          <td className="text-white w-1/5 py-2 px-4">Three months</td>
          <td className="text-white w-1/5 py-2 px-4">Six Months</td>
          <td className="text-white w-1/5 py-2 px-4">One year as priority</td>
          <td className="text-white w-1/5 py-2 px-4">
            Highest priority ongoing support
          </td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">
            Database (relational and non-relational)
          </td>
          <td className="text-white w-1/5 py-2 px-4">
            Simple entities/tables if required
          </td>
          <td className="text-white w-1/5 py-2 px-4">Specific models</td>
          <td className="text-white w-1/5 py-2 px-4">Advanced models</td>
          <td className="text-white w-1/5 py-2 px-4">
            Ongoing development of database
          </td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">Developer(s)</td>
          <td className="text-white w-1/5 py-2 px-4">One</td>
          <td className="text-white w-1/5 py-2 px-4">Up to two</td>
          <td className="text-white w-1/5 py-2 px-4">Up to three</td>
          <td className="text-white w-1/5 py-2 px-4">As many as required</td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">Deadline</td>
          <td className="text-white w-1/5 py-2 px-4">One month</td>
          <td className="text-white w-1/5 py-2 px-4">Two months</td>
          <td className="text-white w-1/5 py-2 px-4">Up to six months</td>
          <td className="text-white w-1/5 py-2 px-4">Ongoing development</td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">Feedback</td>
          <td className="text-white w-1/5 py-2 px-4">Every two weeks</td>
          <td className="text-white w-1/5 py-2 px-4">Every two weeks</td>
          <td className="text-white w-1/5 py-2 px-4">Every week</td>
          <td className="text-white w-1/5 py-2 px-4">Daily meetings</td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">
            Server and database renovation
          </td>
          <td className="text-white w-1/5 py-2 px-4">Every month**</td>
          <td className="text-white w-1/5 py-2 px-4">Every three months**</td>
          <td className="text-white w-1/5 py-2 px-4">Every six months**</td>
          <td className="text-white w-1/5 py-2 px-4">Ongoing service</td>
        </tr>
        <tr className="border-b">
          <td className="text-blue-400 w-1/5 py-2 px-4">Admin dashboard</td>
          <td className="text-white w-1/5 py-2 px-4">No</td>
          <td className="text-white w-1/5 py-2 px-4">No</td>
          <td className="text-white w-1/5 py-2 px-4">Yes</td>
          <td className="text-white w-1/5 py-2 px-4">Yes</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PlanTables;
