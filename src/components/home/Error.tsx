const Error = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-[#6C727F] text-center text-xl font-medium">
        Something went wrong
      </h2>

      <button className="text-white font-medium py-1 px-4 bg-[#282B30] rounded-lg">
        Try again
      </button>
    </div>
  );
};

export default Error;
