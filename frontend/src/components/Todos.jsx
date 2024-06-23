
// todos = [
//     {
//         title: "sfasfda",
//         description: "sdfasdfas",
//         completed
//     }
// ]


export function Todos({ todos = [] }) {
    return (
        <div className="border-2 border-gray-300 rounded-lg p-4 space-y-4">
            {todos.map((todo) => (
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">{todo.title}</h1>
                    <h2 className="text-lg text-gray-600">{todo.description}</h2>
                    <button
                        className={`w-fit cursor-pointer rounded-lg shadow-xl ring-2 ring-blue-500 bg-${todo.completed ? 'green' : 'violet'}-500 hover:bg-${todo.completed ? 'green' : 'violet'}-600 pt-2 pb-2 pl-2 pr-2`}
                    >
                        {todo.completed ? "Completed" : "Mark as Complete"}
                    </button>
                </div>
            ))}
        </div>
    );
}
