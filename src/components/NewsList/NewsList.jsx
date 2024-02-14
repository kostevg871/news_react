import React from "react";

import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";

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

export default NewsList;
