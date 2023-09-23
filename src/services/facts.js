const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact"

export const newRandomCatFact = async () => {
    
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
      
    const { fact } = data || 'Un gato grande es mayor que uno pequeño'
    return fact
  
  }