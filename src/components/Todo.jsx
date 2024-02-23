import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {addTodo, updateSearchTerms} from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {

  const dispatch = useDispatch();
  const [newTodoText , setNewTodoText] = useState("");
  const [searchTerm , setsearchTerm] = useState("");

  const handleAddTodoClicked = () => {
    if(newTodoText.trim !== "") {
        dispatch(addTodo(newTodoText.trim()));
        setNewTodoText("");
    }
  }

  const handleSearchChange = (value) => {
      setsearchTerm(value);
      dispatch(updateSearchTerms(value))
  }
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
        <h2 className=" mt-3 mb-6 text-2xl font-bold text-center"> Todo App </h2>

        <div className="flex items-center mb-4">
            <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo"
             className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none"></input>
             <button className="ml-4 p-2 bg-blue-500 text-white hover:bg-blue-600 rounded focus:outline-none"
                onClick={handleAddTodoClicked}> <BsPlus /></button>
        </div>

        {/* Adding search and filter button*/}

        <div className="flex items-center justify-between">
          <FilterButton></FilterButton>

          <div className="flex items-center mb-4">
            <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none"></input>
            <button className="ml-4 p-2 bg-blue-500 text-white hover:bg-blue-600 rounded focus:outline-none"
                onClick={handleAddTodoClicked}> <BsSearch /></button>
          </div>
          
        </div>

        <TodoList></TodoList>

    </div>
    
  )
}
export default Todo;