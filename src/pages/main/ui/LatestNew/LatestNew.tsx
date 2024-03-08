import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList
        news={data && data.news}
        type="banner"
        isLoading={isLoading}
        direction="row"
      />
    </section>
  );
};

export default LatestNews;
