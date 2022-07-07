import { useState, useEffect } from "react";
import { urlBase, apiKey, q_page } from "../Utils/variables";

const useFetchList = (type, category, page) => {

 const [results, setResults] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [totalPages, setTotalPages] = useState(1)


 useEffect(() => {
  setIsLoading(true)
  fetch(`${urlBase}${type}/${category}?${apiKey}${q_page}${page}`)
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

export default useFetchList;