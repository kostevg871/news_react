import styles from "./styles.module.css";
import LatestNew from "../../components/LatestNew/LatestNew";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";

const Main = () => {
  return (
    <main className={styles.main}>
      <LatestNew />
      <NewsByFilters />
    </main>
  );
};

export default Main;
