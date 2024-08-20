import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: 'Hello World'}]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state, aciton) => {
            const todo = {
                id: nanoid(),
                text: aciton.payload
            }
            state.todos.push(todo)
        },
        RemoveTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        UpdateTodo : (state, action) => {
           const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo.text = action.payload.text  
        }
    }
})


export const {addTodo, RemoveTodo, UpdateTodo} = TodoSlice.actions

export default TodoSlice.reducer