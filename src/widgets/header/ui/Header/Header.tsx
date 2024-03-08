import { useTheme } from "@/app/providers/ThemeProvider";
import { formateDate } from "@/shared/helpers/formatDate";
import styles from "./styles.module.css";
import { ThemeButton } from "@/features/theme";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <Link to={"/"}>
          <h1 className={styles.title}>React News</h1>
        </Link>

        <p className={styles.date}>{formateDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
