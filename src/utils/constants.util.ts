const getApiUrl = (searchValue: string) => `/api/${searchValue}`;
const getWikipediaPageURL = (pageId: number) =>
  `https://en.wikipedia.org/?curid=${pageId}`;

export { getApiUrl, getWikipediaPageURL };
