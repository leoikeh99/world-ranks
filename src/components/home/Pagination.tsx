import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  forcePage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination = ({ pageCount, forcePage, onPageChange }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={onPageChange}
      breakLabel={<img src="/src/assets/three-dots.svg" />}
      nextLabel={<img src="/src/assets/chevron-right.svg" />}
      previousLabel={<img src="/src/assets/chevron-left.svg" />}
      renderOnZeroPageCount={null}
      containerClassName="flex flex-wrap gap-3 mt-10 justify-end"
      pageLinkClassName="w-8 h-8 rounded-md bg-[#282B30] text-[#D2D5DA] font-semibold flex items-center justify-center"
      activeLinkClassName="outline outline-2 outline-[#D2D5DA]"
      previousClassName="w-8 h-8 rounded-md bg-[#282B30] text-[#D2D5DA] font-semibold flex items-center justify-center"
      nextClassName="w-8 h-8 rounded-md bg-[#282B30] text-[#D2D5DA] font-semibold flex items-center justify-center"
      breakClassName="w-10 h-8 rounded-md bg-[#282B30] text-[#D2D5DA] font-semibold flex items-center justify-center"
    />
  );
};

export default Pagination;
