const PlanTables: React.FC = () => {
  return (
    <table className="hidden md:block table-auto">
      <thead>
        <tr className="text-white">
          <th>Content</th>
          <th>Alpha</th>
          <th>Beta</th>
          <th>Omega</th>
          <th>Custom</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-white">
          <td>Finishing deadline</td>
          <td>One month</td>
          <td>Two months</td>
          <td>Up to six months</td>
          <td>Ongoing development</td>
        </tr>
        <tr className="text-white">
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr className="text-white">
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PlanTables;
