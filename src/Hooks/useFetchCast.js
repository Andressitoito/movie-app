import { useEffect, useState } from "react"
import { urlBase, apiKey } from "../Utils/variables"

const useFetchCast = (type, id, cast) => {

  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`${urlBase}${type}/${id}/${cast}?${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data)
        setIsLoading(true)
      })
  }, [])

  return [results, isLoading]

}

export default useFetchCast;