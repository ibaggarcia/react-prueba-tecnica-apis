import { useState, useEffect } from "react"
import { newRandomCatFact } from "../services/facts"

export function useCatFact() {
  
    const [catFact, setCatFact] = useState('')
  
    const getRandomFact = () => {
      newRandomCatFact().then(fact => setCatFact(fact))
    }
  
    useEffect(getRandomFact, [])
    
    return { catFact, getRandomFact }
  }