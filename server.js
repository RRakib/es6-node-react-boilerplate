// Imports
import cors from 'cors'
import express from 'express'
import Home from './routes/home'
import GetTodo from './routes/api/todo/get'


// Initialization
const app = express()
const PORT = process.env.PORT || 8080


// Middleware
app.use(cors())
app.use(express.json())


// Server Renders
app.use('/', Home)


// Api Routes
app.use('/api/v1', GetTodo)


// Listening To Port
app.listen(PORT, () => {
    console.log('Listening To Port 8080')
})