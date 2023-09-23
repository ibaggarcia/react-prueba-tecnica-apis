const GIPHY_ENDPOINT_GIF = `https://api.giphy.com/v1/gifs/search`
const GIPHY_API_KEY = 'hhulZeYgR7q37Mnbyv3GbZVmKKY7PZ9I'

export const getRandomGIF = async (fact) => {
      const shortFact = fact.split(" ").slice(0, 3).join(" ")
        
      const res = await fetch(`${GIPHY_ENDPOINT_GIF}?q=${shortFact}&api_key=${GIPHY_API_KEY}`)
      const data = await res.json()

      return data.data[0]?.images.original.url || 'https://i.ibb.co/2ZPFsYg/error.webp'
    }