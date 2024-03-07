import NewsItem from "@/entities/news/ui/NewsItem/NewsItem";
import withSkeleton from "@/shared/hocs/withSkeleton";

import styles from "./styles.module.css";
import { INews } from "@/entities/news";

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <div className={styles.list}>
      <ul>
        {news?.map((item) => {
          return <NewsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10);

export default NewsListWithSkeleton;
