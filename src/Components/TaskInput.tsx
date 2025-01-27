import drop_down from "../assets/dropdown.png"
import bell_icon from "../assets/bell.png"
import loop from "../assets/loop.png"
import calendar from "../assets/calendar.png"
import { useEffect, useState } from "react"
import TaskList from "./TaskList"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addTodo, fetchTodos } from "../Redux/features/TodoSlice"
const TaskInput = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.todos);

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  return (<>
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-2 bg-gradient-to-t from-lightGreen h-40">
        <div className="flex items-center gap-1">
          <p className="text-gray-500">To do</p>
          <img src={drop_down} alt="" className="w-3 h-2" />
        </div >
        <div className="flex flex-col gap-5">
          <div className="flex gap-7 items-center sm:gap-12 mt-5 rounded-md px-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input
              id="task"
              name="task"
              type="text"
              placeholder="Add A Task"
              className="block w-50 sm:w-80 md:w-96  border grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400  focus:outline-none sm:text-sm/6 rounded"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            /> <button className="text-white  bg-customGreen border flex items-center rounded-md px-3 py-2 sm:py-2 text-xs sm:text-sm font-semibold" onClick={handleAddTodo}>Add Task</button>
          </div>
          <div className="flex justify-between items-center mt-3 px-3">
            <div className="flex gap-3 ">
              <img src={bell_icon} alt="Bell-icon" className="w-5 h-5" />
              <img src={loop} alt="Loop" className="w-5 h-5" />
              <img src={calendar} alt="Drop-Down" className="w-5 h-5" />
            </div>

          </div>
          <div>
          </div>
        </div>
      </div>
      <TaskList />
    </div>

  </>
  )
}

export default TaskInput
