import './App.css'

import { useCatFact } from './hooks/useCatFact'
import { useSearchGIF } from './hooks/useSearchGIF'

function App() {

  const { catFact, getRandomFact } = useCatFact()
  const { gif } = useSearchGIF({ catFact })

  const handleClick = async () => {
    getRandomFact()
  }

  return (
      <main>
        <aside>
          <img src={`${gif}`}/>
        </aside>
        <article>
          {catFact}
        </article>
        <button onClick={() => handleClick()}>Nuevo GIF</button>
      </main>
  )
}

export default App
