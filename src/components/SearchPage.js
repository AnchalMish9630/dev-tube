import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { YOUTUBE_SEARCH_PAGE_API } from '../utils/constant';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
      const query = searchParams.get("q");
    console.log(query)

    const [searchResults, setSearchResults] = useState([]);
    const getSearchResults = async () => {
        const data = await fetch(YOUTUBE_SEARCH_PAGE_API + query);
        const jsonData = await data.json();
        console.log(jsonData)
    };
    useEffect(() => {
        getSearchResults();
    },[])
    return <><div>Search</div></>

}

export default SearchPage