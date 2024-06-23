const z = require("zod");

/*
    // adding todo
    {
        title: string,
        description: string
    }

    // updating todo
    {
        id: string
    }
*/ 

const createTodo = z.object({
    title: z.string(),
    description: z.string(),
});

const updateTodo = z.object({
    id: z.string()
});

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}

// import these in the index.js file
