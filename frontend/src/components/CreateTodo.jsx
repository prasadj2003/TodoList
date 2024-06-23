import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="flex flex-col justify-center items-center pt-5">
            <input
                type="text"
                placeholder="title"
                className="rounded-lg shadow-xl pt-2 pb-2 pl-1 w-64 max-w-80"
                onChange={(e) => setTitle(e.target.value)}
            /> <br />
            <input
                type="text"
                placeholder="description"
                className="rounded-lg shadow-xl pt-2 pb-2 pl-1 w-64 max-w-80"
                onChange={(e) => setDescription(e.target.value)}
            /> <br />
            <button
                className="w-fit cursor-pointer rounded-lg shadow-xl ring-2 ring-blue-500 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 pt-2 pb-2 pl-2 pr-2 mb-5"
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                        }),
                        headers: {
                            "Content-type": "application/json",
                        },
                    })
                        .then(async (res) => {
                            if (!res.ok) {
                                throw new Error(`HTTP error! status: ${res.status}`);
                            }
                            const json = await res.json();
                            alert("todo added");
                        })
                        .catch((error) => {
                            console.error("Error adding todo:", error);
                            alert("Failed to add todo. Please try again.");
                        });
                }}
            >
                Add Todo
            </button>
        </div>
    );
}
