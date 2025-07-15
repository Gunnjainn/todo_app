//write basic express boilerplate code with express.json() middlewares

const express = require('express');
const { createTodo, updateTodo} = require('./types')
const { todo } = require('./db');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());   //to fix cors error, allow requests from any frontend

//validate the inputs using zod

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent invalid inputs"
        })
        return;
    }
    //put it in mongodb
    await todo.create({            //wait before res.json because the database may be down
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get('/todos',async (req, res) => {
    //const todos = await todo.find();      //todos returns a promise when you find it..database might be in US so you have to wait to get the database
    res.json({
        todos: []
    })
})

app.put('/completed',async (req, res) => {
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent invalid inputs"
        })
        return;
    }

    await todo.update({
        _id: req.body.id     //when an entry is created in database, it generates a unique _id
    },{
        completed: true
    })

    res.json({
        msg: "Marked as completed"
    })
})

app.listen(port);
