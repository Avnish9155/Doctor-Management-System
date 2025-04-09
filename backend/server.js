import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// App configuration
const app = express()
const port = process.env.PORT || 4000

// Middlewares
app.use(express.json())
app.use(cors())  // yahan "cors" ka sahi use ho raha hai

// API endpoints
app.get('/', (req, res) => {
  res.send('API WORKING ')
})

app.listen(port, () => console.log("Server Started", port))
