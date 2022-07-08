import { useState, useEffect } from "react";
import { urlBase, apiKey, q_page, q_search } from "../Utils/variables";

const useFetchSearch = (searchReq, page) => {

 const [results, setResults] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [totalPages, setTotalPages] = useState(1)

 useEffect(() => {
  setIsLoading(true)
  fetch(`${urlBase}search/multi/?${apiKey}${q_search}${searchReq}${q_page}${page}`)
   .then((res) => res.json())
   .then((data) => {
    console.log(data)
    setResults(data.results)
    setIsLoading(false)
    setTotalPages(data.total_pages)
   })
 }, [page])

 return [results, isLoading, totalPages]
}

export default useFetchSearch;