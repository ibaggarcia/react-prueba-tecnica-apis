import { useState, useEffect } from "react"
import { getRandomGIF } from '../services/randomGIF.js'

export function useSearchGIF({ catFact }) {
    const [gif, setGIF] = useState(null)
  
    useEffect(() => {
      getRandomGIF(catFact).then(gif => setGIF(gif))
    }, [catFact])
  
    return { gif }
  }
  