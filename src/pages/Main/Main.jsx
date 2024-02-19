import styles from "./styles.module.css";
import { getCategory, getNews } from "../../api/apiNews";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsBannerWithSkeleton from "../../components/NewsBanner/NewsBanner";
import NewsListWithSkeleton from "../../components/NewsList/NewsList";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  //  const [currentPage, setCurrentPage] = useState(1);
  //  const [keywords, setKeywords] = useState("");
  //  const [selectedCategory, setSelectedCategory] = useState("All");
  const debounceKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords,
  });

  const { data: dataCategories } = useFetch(getCategory);

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
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) => changeFilter("category", category)}
          selectedCategory={filters.category}
        />
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />

      <NewsBannerWithSkeleton
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleClickPage={handleClickPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />

      <NewsListWithSkeleton isLoading={isLoading} news={data?.news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handleClickPage={handleClickPage}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
