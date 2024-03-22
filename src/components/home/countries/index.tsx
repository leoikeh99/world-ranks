import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-[#6C727F] text-sm text-left font-semibold py-5">
            Flag
          </th>
          <th className="text-[#6C727F] text-sm text-left font-semibold">
            Name
          </th>
          <th className="text-[#6C727F] text-sm text-left font-semibold">
            Population
          </th>
          <th className="text-[#6C727F] text-sm text-left font-semibold">
            Area (km <sup>2</sup>)
          </th>
          <th className="text-[#6C727F] text-sm text-left font-semibold">
            Region
          </th>
        </tr>
      </thead>
      <tbody className="tbody">
        <tr className="relative hover:bg-[#282B30]">
          <td className="py-5">
            <img
              src="https://flagcdn.com/w320/cy.png"
              alt="flag"
              className="w-16 h-11 rounded-md object-cover"
            />
            <Link to="/country/1" className="absolute inset-0" />
          </td>
          <td className="text-[#D2D5DA] font-medium">United States</td>
          <td className="text-[#D2D5DA] font-medium">1,402,112,000</td>
          <td className="text-[#D2D5DA] font-medium">9,706,961</td>
          <td className="text-[#D2D5DA] font-medium">Asia</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Countries;
