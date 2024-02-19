import { getCategory } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import styles from "./styles.module.css";

const NewsFilters = ({ changeFilter, filters }) => {
  const { data: dataCategories } = useFetch(getCategory);
  return (
    <div className={styles.filters}>
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
    </div>
  );
};

export default NewsFilters;
