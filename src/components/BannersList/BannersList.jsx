import styles from "./styles.module.css";
import NewsBanner from "../NewsBanner/NewsBanner";
import withSkeleton from "../../helpers/hocs/withSkeleton";

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.slice(0, 10).map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const NewsBannerWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");
export default NewsBannerWithSkeleton;
