export function CreateTodo() {
    return <div className="flex flex-col justify-center items-center pt-5">
        <input type="text" placeholder="title" className="rounded-lg shadow-xl pt-2 pb-2 pl-1 w-64 max-w-80"></input> <br />
        <input type="text" placeholder="description" className="rounded-lg shadow-xl pt-2 pb-2 pl-1 w-64 max-w-80"></input> <br />
        <button className="w-fit cursor-pointer rounded-lg shadow-xl ring-2 ring-blue-500 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 pt-2 pb-2 pl-2 pr-2">add todo</button>
    </div>
}