const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types.js");
const { todo } = require("./db.js");
app.use(express.json());


// commented is code written by me

// mongoose.connect("mongodb+srv://ppjoshi2003:MU2a5fRRa1kS1Sde@cluster0.llc93zm.mongodb.net/todo");

// const todoSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     completed: Boolean
// });

// const Todo = mongoose.model('Todo', todoSchema);

// app.post('/add', async (req, res) => {
//     const { title, description, completed } = req.body;
    
//     const todo = new Todo({
//         title,
//         description,
//         completed
//     });

//     const validate = createTodo.safeParse(todo);

//     if(validate.success == true){
//         const result = await todo.save();
//         res.status(201).json(result);
//     }else{
//         res.status(403).json({
//             msg: "There's an error in the /add path",
//             error: error.message
//         });
//     }
    
//     // try {
//     //     const result = await todo.save();
//     //     res.status(201).json(result);
//     // } catch (error) {
//     //     res.status(403).json({
//     //         msg: "There's an error in the /add path",
//     //         error: error.message
//     //     });
//     // }
// });


// app.get('/todos', async (req, res) => {

//     try {
//         const allTodos = await Todo.find({});
//         res.status(200).json(allTodos); 
//     } catch (error) {
//         res.status(403).json({
//             msg: "there's an error in the /todos path",
//             error: error.message
//         })
//     }
    
// })

// app.put('/todo', async (req, res) => {
//     const id = req.body.id;
//     const status = req.body.status;

//     try {
//         const result = Todo.findOneAndUpdate({_id: id}, {completed: status});
//         res.status(200).json({
//             msg: `todo with id: ${id} status is updated`
//         });
//     } catch (error) {
//         res.status(403).json({
//             msg: "there's some error in /todo out method",
//             error: error.message
//         })
//     }
// })

// app.delete('/todo', async(req, res) => {
//     const id = req.body.id;
//     try {
//         const result = await Todo.deleteOne({ _id: id });
//         res.status(200).json({
//             msg: `todo with id ${id} deleted`
//         })
//     } catch (error) {
//         res.status(403).json({
//             msg: "There's an error in the /todo delete",
//             error: error.message
//         });
//     }
// })

// app.listen(3000, () => {
//     console.log("app listening on port 3000");
// })

// Hkirat's code


app.post('/todo', async (req, res) => {

    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        });
        return;
    }
    else{
        // put in mongoDB
        await todo.create({
            title: req.body.title,
            description: req.body.description,
            completed: false
        })
        res.status(200).json({
            msg: "todo added to database successfully"
        })
    }
});

app.get('/todos', async (req, res) => {
    const result = await todo.find({}); // as todo.find({}) returns a promise
    // or todo.find({}).then(result => res.json(result))
    res.json(result);
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "you sent the wrong inputs",
        });
        return;
    }
    else{
        // put in mongoDB
        await todo.updateOne({
            _id: req.body.id
        }, {
            completed: true
        })

        res.json({
            msg: "todo marked as completed"
        })
    }
});



app.listen(3000, () => {
    console.log("app listening on port 3000");
})

