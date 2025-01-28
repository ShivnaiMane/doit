import { useDispatch, useSelector } from "react-redux"
import star_icon from "../assets/star.png"
import { useContext, useEffect } from "react"
import star_black from "../assets/black_star.png"
import { AppContext } from "../Context/AppContext"
import { fetchTodos, toggleCompleteTask, toggleImpTask, } from "../Redux/features/TodoSlice"
import TaskItem from "./TaskItem"


const TaskList = () => {
  const { isList } = useContext(AppContext)
  const dispatch = useDispatch();
  const { items, } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);


  const filterunCompleted = items.filter((item) => item.completed === false);

  const filterCompleted = items.filter((item) => item.completed === true);


  return (
    <div>
      {isList ?
        <div className={'my-4 px-4'}>
          {filterunCompleted?.map((item) => (
            <TaskItem item={item} key={item.id} />
          ))}
        </div> :
        <div className="flex flex-wrap gap-3">
          {filterunCompleted?.map((item) => (
            <div className="flex justify-between items-center sm:flex-row sm:mx-auto gap-2 py-4 border w-80  px-5 py-10 my-2" key={item.id}>
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" checked={item.completed} onChange={(e) => {
                  e.preventDefault();
                  dispatch(toggleCompleteTask(item.id))
                }} />
                <p className="">{item.todo}</p></div>
              <img src={item.important ? star_black : star_icon} alt="Star" className="w-6 text-black" onClick={(e) => {
                e.preventDefault()
                dispatch(toggleImpTask(item.id))
              }} />
            </div>))}
        </div>
      }
      <div className='my-4  px-4 '>
        <h1 className="">Completed</h1>
        {filterCompleted?.map((item) => (
          <TaskItem item={item} key={item.id} />))}
      </div>
    </div>

  )
}

export default TaskList
