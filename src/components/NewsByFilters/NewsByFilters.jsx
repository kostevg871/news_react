import { getNews } from "../../api/apiNews";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import styles from "./styles.module.css";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handleClickPage = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.sections}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />
      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleClickPage={handleClickPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
