import { themeIcons } from "../../assets";
import { formateDate } from "../../helpers/formatDate";
import styles from "./styles.module.css";

interface Props {
  isDark: boolean;
  setIsDark: () => void;
}

const Header = ({ isDark, setIsDark }: Props) => {
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>React News</h1>
        <p className={styles.date}>{formateDate(new Date())}</p>
      </div>
      <img
        src={isDark ? themeIcons.dark : themeIcons.light}
        width={30}
        alt="theme"
        onClick={setIsDark}
      />
    </header>
  );
};

export default Header;
