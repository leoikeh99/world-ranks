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
      breakLabel={<img src="/src/assets/three-dots.svg" className="scale-75" />}
      nextLabel={<img src="/src/assets/chevron-right.svg" />}
      previousLabel={<img src="/src/assets/chevron-left.svg" />}
      renderOnZeroPageCount={null}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-link"
      activeLinkClassName="pagination-active"
      previousClassName="pagination-link"
      nextClassName="pagination-link"
      breakClassName="pagination-link w-10 h-7 xxs:h-8"
    />
  );
};

export default Pagination;
