import express from 'express'
import todos from '../../../constant/data'

console.log(todos)
const route = express.Router()

route.get('/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: todos
    })
});

export default route