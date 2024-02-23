import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETE, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_TODO, TOGOLLE_TODO, UPDATE_SEARCH_TODO } from "./actionType";

const todoListData = [
    { id: 1, text: 'Go grocery shopping', completed: false },
    { id: 2, text: 'Finish homework', completed: true },
    { id: 3, text: 'Read a book', completed: false },
    { id: 4, text: 'Exercise for 30 minutes', completed: false },
    // Add more todo items as needed
  ];
  

const initialState = {
    todos : todoListData,
    filter: "ALL",
    searchTerm : ""
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO : 
            return {
                todos : [...state.todos , {text : action.payload.text, completed: false}],
                filter : state.filter,
                searchTerm : state.searchTerm
            }
        case TOGOLLE_TODO : 
            return {
                todos : state.todos.map((todo , index) => index === action.payload.id ? {...todo, completed: !todo.completed} : todo),
                filter : state.filter,
                searchTerm : state.searchTerm
            }
        case REMOVE_TODO : 
            return {
                todos : state.todos.filter((todo , index) => 
                    index !== action.payload.id ),
                filter : state.filter,
                searchTerm : state.searchTerm
            }

        case MARK_COMPLETED : 
            return {
                todos : state.todos.map((todo , index) => index === action.payload.id ? {...todo, completed: true} : todo),
                filter : state.filter,
                searchTerm : state.searchTerm
            }

        case MARK_INCOMPLETE : 
            return {
                todos : state.todos.map((todo , index) => index === action.payload.id ? {...todo, completed: false} : todo),
                filter : state.filter,
                searchTerm : state.searchTerm
            }

        case FILTER_TODO : 
            return {
                todos : state.todos,
                filter : action.payload.filter , 
                searchTerm : state.searchTerm
            }
        case UPDATE_SEARCH_TODO : 
            return {
                todos : state.todos,
                filter : state.filter , 
                searchTerm : action.payload.searchTerm
            }
        case MARK_ALL_COMPLETE : 
            return {
                todos : state.todos.map((todo) =>  ({...todo, completed: true})),
                filter : state.filter,
                searchTerm : state.searchTerm
            }
        
        
        default:
            return state;
    } 
}

export default todoReducer;