import styles from "./styles.module.css";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
  isDark: boolean;
}

const Search = ({ keywords, setKeywords, isDark }: Props) => {
  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        id="1"
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="JavaScript"
      />
    </div>
  );
};

export default Search;
