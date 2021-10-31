import React from 'react';
import axios from 'axios'
import { TodoList } from './TodoList';


let Todo = () => {
    const [query, setQuery] = React.useState("")
    const [todoData, setTodoData] = React.useState([])
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
        getData()
    }, [page, query])


    //GET data from the localhost
    const getData = async () => {
        const { data } = await axios.get("http://localhost:3051/todos", {
            params: {
                _page: page,
                _limit: 3
            }
        });
        setTodoData(data)

    }

    //POST the data to the localhost
    const handleAdd = async () => {
        await axios.post("http://localhost:3051/todos", {
            name: query,
            status: false
        })
        setQuery("")
    }

    return (
        <>
            <div className="container text-center mt-3">

                <input
                    className="form-control container col-3"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                    type="text"
                    placeholder="Add ToDo" />

                <button
                    className="btn btn-primary col-3 "
                    onClick={handleAdd}
                >Add</button>
            </div>

            <TodoList data={todoData} />

            <button
                className="btn btn-warning mx-5 my-3"
                onClick={() => {
                    setPage(page - 1)
                }}>Prev</button>

            <button
                className="btn btn-success mx-5"

                onClick={() => {
                    setPage(page + 1)
                }}>Next</button>

        </>
    );
}

export { Todo }