import { useEffect, useState } from "react"
import { IAnimal } from "./types"
import Animal from "./Animal"

const App = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([])
  
  useEffect(() => {
    const lastQuery = localStorage.getItem('lastQuery')
    if (lastQuery) {
      search(lastQuery)
    }
  }, [])

  const search = async (q: string) => {
    const response = await fetch(`http://localhost:8080?q=${q}`)
    const data = await response.json()
    setAnimals(data)

    // cache data
    localStorage.setItem('lastQuery', q)
  }

  return (
    <div>
      <h1>Animal Farm</h1>
      <input type="text" placeholder="Search" onChange={(e) => search(e.target.value)}/>
      <ul>
        {animals.map(animal => (
          <Animal key={animal.id} {...animal}/>
        ))}

        {animals.length === 0 && <strong>No animals found</strong>}
      </ul>
    </div>
  )
}
export default App