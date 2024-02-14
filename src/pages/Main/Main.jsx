import React, { useEffect } from "react";

import styles from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { getNews } from "../../api/apiNews";

const Main = () => {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        await getNews();
        console.log(news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <NewsBanner />
    </main>
  );
};

export default Main;
