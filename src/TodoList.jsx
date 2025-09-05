import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todo, setTodo] = useState([{ task: "sample-task", id: uuidv4(), status: "false" }]);
    let [newtodo, setNewTodo] = useState([""]);
    let styles = { textDecoration: "line-through" };

    let addNewTask = () => {
        setTodo((todo) => {
            return [...todo, { task: newtodo, id: uuidv4(), status: "false" }]
        });
        setNewTodo("");
    }

    // New Concept
    let updateTodo = (event) => { setNewTodo(event.target.value) }

    let deletedTodo = (id) => {
        setTodo((todo) =>
        (todo.filter(
            (todo) => todo.id != id
        )));
    }

    let UpperCaseall = () => {
        setTodo(todo.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        }))
    }
    let UpperCaseOne = (id) => {
        setTodo(
            todo.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                }
                else {
                    return todo;
                }
            })
        )
    }

    let Markall = () => {
        setTodo(todo.map((todo) => {
            return {
                ...todo,
                status: "true",
            };
        }))
    }
    let markOne = (id) => {
        setTodo(
            todo.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        status: "true",
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    return (
        <div>
            <input placeholder="add a task" value={newtodo} onChange={updateTodo}></input>
            <br></br>
            <button onClick={addNewTask}>Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Todo List</h4>
            <ul>
                {todo.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.status == "true" ? styles : null}>{todo.task}</span>
                        <button onClick={() => (UpperCaseOne(todo.id))}>Uppercase</button>
                        <button onClick={() => (markOne(todo.id))}>Mark them done</button>
                        &nbsp;&nbsp;
                        <button onClick={() => (deletedTodo(todo.id))}>delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={UpperCaseall}>UpperCase All</button>
            <button onClick={Markall}>Mark them all</button>
        </div>
    );
}