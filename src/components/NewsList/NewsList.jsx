import React from "react";

import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSkeleton from "../../helpers/hocs/withSkeleton";

const NewsList = ({ news }) => {
  return (
    <div className={styles.list}>
      <ul>
        {news.map((item) => {
          return <NewsItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsListWithSkeleton;
