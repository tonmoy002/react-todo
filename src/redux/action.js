import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETE, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGOLLE_TODO, UPDATE_SEARCH_TODO } from "./actionType";

export const addTodo = (text) => ({

    type : ADD_TODO,
    payload : {text}
})

export const toggleTodo = (id) => ({

    type : TOGOLLE_TODO,
    payload : {id}
})


export const removeTodo = (id) => ({

    type : REMOVE_TODO,
    payload : {id}
})

export const markCompleted = (id) => ({

    type : MARK_COMPLETED,
    payload : {id}
})

export const markIncomplete = (id) => ({

    type : MARK_INCOMPLETE,
    payload : {id}
})


export const filteredTodo = (filter) => ({

    type : FILTER_TODO,
    payload : {filter}
})

export const markAllCompleted = () => ({

    type : MARK_ALL_COMPLETE,
})

export const updateSearchTerms = (searchTerm) => ({

    type : UPDATE_SEARCH_TODO,
    payload : {searchTerm}
})