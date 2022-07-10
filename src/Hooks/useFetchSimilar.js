import { useEffect, useState } from "react"
import { urlBase, apiKey, q_page } from "../Utils/variables"

const useFetchSimilar = (type, id, similar, page) => {

 const [results, setResults] = useState([])
 const [isLoading, setIsLoading] = useState(false)
 const [totalPages, setTotalPages] = useState(1)

 useEffect(() => {
  fetch(`${urlBase}${type}/${id}/${similar}?${apiKey}${q_page}${page}`)
   .then((res) => res.json())
   .then((data) => {
    setResults(data)
    setIsLoading(true)
    setTotalPages(data.total_pages)
   })
 }, [page])

 return [results, isLoading, totalPages]

}

export default useFetchSimilar;