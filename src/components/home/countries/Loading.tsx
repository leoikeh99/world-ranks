const Loading = () => {
  return (
    <>
      {[...new Array(7)].map((_, index) => (
        <tr key={index}>
          <td className="py-5">
            <div className="w-[70%] h-3 rounded-md bg-[#282B30] animate-pulse"></div>
          </td>
          <td className="text-[#D2D5DA] font-medium">
            <div className="w-[70%] h-3 rounded-md bg-[#282B30] animate-pulse"></div>
          </td>
          <td className="text-[#D2D5DA] font-medium hidden xs:table-cell">
            <div className="w-[70%] h-3 rounded-md bg-[#282B30] animate-pulse"></div>
          </td>
          <td className="text-[#D2D5DA] font-medium hidden xxs:table-cell">
            <div className="w-[70%] h-3 rounded-md bg-[#282B30] animate-pulse"></div>
          </td>
          <td className="text-[#D2D5DA] font-medium hidden lg:table-cell">
            <div className="w-[70%] h-3 rounded-md bg-[#282B30] animate-pulse"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Loading;
