const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()

app.use(cors())

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '1', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'random-words5.p.rapidapi.com',
            'x-rapidapi-key': 'e99f987c4dmsh493c5a6b6ec0223p157eb9jsn48833017a58c'
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data[0])
    }).catch((error) => {
        console.error(error)
    })
})


app.get('/check', (req, res) => {
    const word = req.query.word

    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: word},
        headers: {
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'x-rapidapi-key': 'e99f987c4dmsh493c5a6b6ec0223p157eb9jsn48833017a58c'
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data.result_msg)
    }).catch((error) => {
        console.error(error)
    })
})


app.listen(PORT, () => console.log('Server running on port ' + PORT))
