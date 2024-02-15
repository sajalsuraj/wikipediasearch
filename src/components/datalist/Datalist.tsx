import { ListitemType } from "../../types/listitem.types";
import Listitem from "./Listitem";
import styles from "./datalist.module.scss";
import { FixedSizeList as List } from "react-window";

interface DatalistProps {
  listItems: ListitemType[];
}

// This component will be passed as a row
// in FixedSizeList
const Item = (props: any) => {
  const { data, index, style } = props;
  return (
    <div style={style}>
      <Listitem key={data[index].pageid} itemData={data[index]} />
    </div>
  );
};

export default function Datalist({ listItems }: DatalistProps) {
  const totalHeight = document.body.offsetHeight - 354; // Height of top element (Search component) + Margins + Paddings = 354px
  return (
    <div className={styles.dataListContainer}>
      <List
        height={totalHeight}
        itemCount={listItems.length}
        itemData={listItems}
        itemSize={120}
        width={"100%"}
      >
        {Item}
      </List>
    </div>
  );
}
