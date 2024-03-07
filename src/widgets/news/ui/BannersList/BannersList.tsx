import NewsBanner from "@/entities/news/ui/NewsBanner/NewsBanner";
import withSkeleton from "@/shared/hocs/withSkeleton";

import styles from "./styles.module.css";
import { INews } from "@/entities/news";

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.slice(0, 10).map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const NewsBannerWithSkeleton = withSkeleton<Props>(
  BannersList,
  "banner",
  10,
  "row"
);
export default NewsBannerWithSkeleton;
