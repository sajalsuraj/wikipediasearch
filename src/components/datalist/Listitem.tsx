import { ListitemType } from "../../types/listitem.types";
import { getWikipediaPageURL } from "../../utils/constants.util";
import styles from "./datalist.module.scss";

interface ListitemProps {
  itemData: ListitemType;
}

export default function Listitem({ itemData }: ListitemProps) {
  return (
    <div className={styles.listItem}>
      <div className={styles.itemTitle}>
        <a href={getWikipediaPageURL(itemData.pageid)}>{itemData.title}</a>
      </div>

      <div className={styles.itemLink}>
        <a href={getWikipediaPageURL(itemData.pageid)}>
          {getWikipediaPageURL(itemData.pageid)}
        </a>
      </div>

      <div className={styles.itemSnippet}>
        <p
          dangerouslySetInnerHTML={{
            __html: itemData.snippet,
          }}
        ></p>
      </div>
    </div>
  );
}
