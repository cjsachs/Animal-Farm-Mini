import express from 'express'
import cors from 'cors'
import Chance from 'chance'

const app = express()
app.use(cors())
app.use(express.json())

// create animals
const chance = Chance()
const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name()
    }
})

// endpoint for search
app.get('', (req, res) => {

    // filter results by query
    const q = req.query.q?.toLowerCase() || ''
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q))

    // send back to client
    res.send(results)
})

app.listen(8080, () => console.log('Listening on port: http://localhost:8080'))