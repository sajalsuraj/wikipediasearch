# Wikipedia Search App

## Technologies used
**UI Library** - React, Typescript, React Window (Virtualized List)

**Backend** - NodeJs, Express

**HTTP Library** - Axios

## Folder Structure
- root
    - src
        - components
            - datalist
            - loader
            - search
        - pages
            - home
        - types
            - listitem.types.ts
        - utils
            - constants.util.ts
            - helpers.util.ts
        - App.tsx
        - index.tsx
        - layout.tsx
    - server.js

## Important files and their usage - 
**src/layout.tsx** - The outlet container component where the pages will be rendered.

**src/App.tsx** - The main component.

**pages/home/Home.tsx** - The home page of the app that will render the search, search results, and search history components.

**src/components/search/Search.tsx** - The search component that contains a search bar and a search button that will trigger the search.

**src/components/loader/Loader.tsx** - The loader component acts as a placeholder until the real data appears.

**src/components/datalist/Datalist.tsx** - The Datalist component is responsible for listing of the search results and search history list.

**src/components/Listitem.tsx** - The Listitem component is responsible to render a single search list item.

**src/utils/helpers.util.ts** - This file contains the helper functions.

**src/utils/constants.util.ts** - This file contains the constant variables.

**server.js** - This is a server file that runs the entire application and APIs.

## Functionalities -
**Search functionality**

- User can provide the search string in the input box and on the search button click an API will be called that eventually fetches the result from the Wikipedia API.
- The result will be set in a react state and then gets rendered through the Datalist component.
- Handled states like loading, empty data, etc.
- Local API to fetch the data from Wikipedia - **/api/:searchValue**
- Wikipedia API used - https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&format=json&srlimit=50&srsearch={searchValue}

**Search History**

- Shows the list of the search strings.

## Optimization techniques
- Used Virtualized list to show a certain number of list items

## Technologies required
- Node 18+

## Steps to run the app locally
- Run "git clone git@github.com:sajalsuraj/wikipediasearch.git"
- npm install
- npm run app
- Open browser, run the app on "http://localhost:3001"

