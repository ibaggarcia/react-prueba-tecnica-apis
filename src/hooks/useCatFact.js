import { useState, useEffect } from "react"
import { newRandomCatFact } from "../services/facts"

export function useCatFact() {
  
    const [catFact, setCatFact] = useState('Un gato grande es mayor que uno pequeño')
  
    const getRandomFact = () => {
      newRandomCatFact().then(fact => setCatFact(fact || 'Un gato grande es mayor que uno pequeño'))
    }
  
    useEffect(getRandomFact, [])
    
    return { catFact, getRandomFact }
  }