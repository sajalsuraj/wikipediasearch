import { useEffect, useState } from "react";
import Datalist from "../../components/datalist/Datalist";
import Search from "../../components/search/Search";
import styles from "./home.module.scss";
import axios from "axios";
import { getApiUrl } from "../../utils/constants.util";
import { ListitemType } from "../../types/listitem.types";
import Loader from "../../components/loader/Loader";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>(""); // To maintain search query
  const [items, setItems] = useState<ListitemType[]>([]); // To maintain the list of search results
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [activeSearchTab, setActiveSearchTab] = useState("result"); // To identify the active tab, default is "Search results"
  const [searchHistoryQueryList, setSearchHistoryQueryList] = useState<
    string[]
  >([]); // To maintain the list of searched query

  // Function to fetch search results
  const getSearchResults = async (searchValue: string) => {
    setIsLoading(true);
    try {
      const searchResponse = await axios.get(getApiUrl(searchValue));
      setIsLoading(false);
      setItems(searchResponse.data.query.search);
    } catch (err) {
      setIsLoading(false);
      setItems([]);
    }
  };

  // If search query available, then only perform below actions
  useEffect(() => {
    if (searchQuery) {
      setActiveSearchTab("result"); //Just to ensure if search button is pressed, then Search results tab should be visible
      setSearchHistoryQueryList((prev) => [...prev, searchQuery]);
      getSearchResults(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      <h1>Wikipedia Search</h1>

      <Search isDataLoaded={isLoading} setSearchQuery={setSearchQuery} />

      {/** Tabs (Search results/ Search history) */}
      <div className={styles.searchTabs}>
        <div>
          <div
            className={`${
              activeSearchTab === "result"
                ? styles.activeTab
                : styles.inActiveTab
            }`}
            onClick={() => setActiveSearchTab("result")}
          >
            Search Results
          </div>
        </div>
        <div>
          <div
            className={`${
              activeSearchTab === "history"
                ? styles.activeTab
                : styles.inActiveTab
            }`}
            onClick={() => setActiveSearchTab("history")}
          >
            Search History
          </div>
        </div>
      </div>

      {/** When search result tab is active */}
      {activeSearchTab === "result" && (
        <div className={styles.dataListSection}>
          {/* Loading state */ isLoading && items.length < 1 && <Loader />}
          {
            /* When data is available */ !isLoading && items.length > 0 && (
              <Datalist listItems={items} />
            )
          }
          {
            /* When data is not available/Error state */ !isLoading &&
              items.length < 1 &&
              searchQuery && (
                <div className={styles.emptyDataPlaceholder}>
                  No Data Available
                </div>
              )
          }
        </div>
      )}

      {/** When search history tab is active */}
      {activeSearchTab === "history" && (
        <div className={styles.searchHistorySection}>
          {searchHistoryQueryList.length > 0 &&
            searchHistoryQueryList.map((query) => (
              <div className={styles.historyItem}>
                <img src="/images/history.png" alt="" /> <span>{query}</span>
              </div>
            ))}

          {searchHistoryQueryList.length < 1 && (
            <div className={styles.emptyDataPlaceholder}>
              Search history not available
            </div>
          )}
        </div>
      )}
    </div>
  );
}
