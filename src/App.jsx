import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [catFact, setCatFact] = useState('')
  const [gif, setGIF] = useState(null)
  const [newGIF, setNewGIF] = useState(false)

  useEffect( () => {
    let shortFact = ''
    const API_KEY = 'hhulZeYgR7q37Mnbyv3GbZVmKKY7PZ9I'
    
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => {
        setCatFact(data.fact || 'Un gato grande')
        
        shortFact = data.fact || 'Un gato grande'
        shortFact = shortFact.split(" ").slice(0, 3).join(" ")
        
        fetch(`https://api.giphy.com/v1/gifs/search?q=${shortFact}&api_key=${API_KEY}`)
          .then(res => res.json())
          .then(data => setGIF(data.data[0].images.original.url))
      })

    
  },[newGIF])

  return (
    <>
      <main>
        <aside>
          <img src={`${gif}`} />
        </aside>
        <article>
          {catFact}
        </article>
        <button onClick={() => setNewGIF(!newGIF)}>Nuevo GIF</button>
      </main>
    </>
  )
}

export default App
