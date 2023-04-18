import { useEffect, useState } from 'react'
import { getConcert } from '../helpers/getConcert'

export const useFetchConcert = (category) => {
  const [concert, setConcert] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getConcert = async () => {
    const concert = await getConcert(category)
    setConcert(concert)
    setIsLoading(false)
  }

  useEffect(() => {
    getConcert()
  }, [])

  return {
    concerts: concert,
    isLoading: isLoading,
  }
}
