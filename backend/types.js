//zod inputs

const zod = require('zod');
/*
    FOR POST REQUEST
    {
        title: string,
        description: string
    }
    FOR PUT REQUEST
    {
        id: string
    }
*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
