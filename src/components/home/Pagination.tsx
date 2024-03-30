import ReactPaginate from "react-paginate";
import ChevronLeft from "@/assets/chevron-left.svg";
import ChevronRight from "@/assets/chevron-right.svg";
import ThreeDots from "@/assets/three-dots.svg";

type Props = {
  pageCount: number;
  forcePage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
};

const Pagination = ({ pageCount, forcePage, onPageChange }: Props) => {
  return (
    <nav aria-label="Pagination">
      <ReactPaginate
        pageCount={pageCount}
        forcePage={forcePage}
        onPageChange={onPageChange}
        breakLabel={
          <img src={ThreeDots} className="scale-75" alt="More pages" />
        }
        nextLabel={<img src={ChevronRight} alt="Next page" />}
        previousLabel={<img src={ChevronLeft} alt="Previous page" />}
        containerClassName="pagination-container"
        pageLinkClassName="pagination-link"
        activeLinkClassName="pagination-active"
        previousClassName="pagination-link"
        nextClassName="pagination-link"
        breakClassName="pagination-link w-10 h-7 xxs:h-8"
      />
    </nav>
  );
};

export default Pagination;
