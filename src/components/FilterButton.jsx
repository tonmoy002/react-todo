import { useDispatch, useSelector } from "react-redux";
import { filteredTodo, markAllCompleted } from "../redux/action";

const FilterButton = () => {

  const dispatch = useDispatch();

  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter ) => {
    dispatch(filteredTodo(filter))
  }
  return (
    <div className="flex space-x-4 items-center">
        <select 
            value={currentFilter} onChange={(e) => handleFilter(e.target.value)}
            className="text-sm px-2 py-1 rounded border-gray-300">
            <option value="ALL"> Default</option>
            <option value="COMPLETED"> Completed</option>
            <option value="INCOMPLETE"> Incomplete</option>
            
        </select>
        <button onClick={() => dispatch(markAllCompleted())} className="text-sm px-2 py-1 bg-purple-300 ml-2 rounded"> Mark all Completed</button>
    </div>
  )
}

export default FilterButton;