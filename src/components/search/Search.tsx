import { useState } from "react";
import styles from "./search.module.scss";
import { debounce } from "../../utils/helpers.util";

interface SearchProps {
  isDataLoaded: boolean;
  setSearchQuery: (searchValue: string) => void;
}

export default function Search({
  isDataLoaded: disableBtn,
  setSearchQuery,
}: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = debounce(setSearchValue, 500); // Debounced

  // On search button click
  const onSearchButtonClick = () => {
    setSearchQuery(searchValue);
  };

  return (
    <div className={`${styles.searchSectionContainer} ${styles.preSearch}`}>
      <div className={styles.logoContainerWide}>
        <img src="/images/logo/wikipedia.png" alt="Wikipedia logo" />
      </div>

      <div className={styles.inputBoxContainer}>
        <div className={styles.inputGroup}>
          <div>
            <img src="/images/search.png" alt="Search" />
          </div>
          <input
            type="text"
            placeholder="Enter keywords"
            onChange={(e) => debouncedSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button
          disabled={disableBtn}
          type="button"
          onClick={() => onSearchButtonClick()}
        >
          Search
        </button>
      </div>
    </div>
  );
}
