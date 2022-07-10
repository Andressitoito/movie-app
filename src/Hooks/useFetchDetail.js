import { useState, useEffect } from "react";
import { urlBase, apiKey } from "../Utils/variables";

const useFetchDetail = (type, id) => {

 const [results, setResults] = useState([])
 const [isLoading, setIsLoading] = useState(false)

 useEffect(() => {
  fetch(`${urlBase}${type}/${id}?${apiKey}`)
   .then((res) => res.json())
   .then((data) => {
    setResults(data)
    setIsLoading(true)
   })
 }, [])

 return [results, isLoading]

}

export default useFetchDetail;