const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { Pool } = require('pg')

const port = 5000
const app = express()
app.use(express.json())
app.use(cors())
const pool = new Pool({
    user: process.env.DB_USERNAME,
    host: '0.0.0.0',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
  })

app.get('/', async (req, res) => {
    res.status(200).send('Grammaroke API')
})

app.get('/user/:id', async (req, res) => {
    const { id } = req.params
    try {
        const { rows } = await pool.query(`SELECT * FROM users FULL JOIN songs ON users.id=songs.user_id WHERE users.id=${id}`)
        res.status(200).send(rows)
    } catch (err) {
        console.log(err)
    }
})

app.post('/song', async (req, res) => {
    const userId = req.body['user-id']
    const {title, lyrics} = req.body
    try {
        const q = `INSERT INTO songs (user_id, title, lyrics) VALUES (${userId}, '${title}', '${lyrics}');`
        const { rows } = await pool.query(q)
        res.status(200).send(rows)
    } catch (err) {
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`api listening at http://0.0.0.0:${port}`)
})