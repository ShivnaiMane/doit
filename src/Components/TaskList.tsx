import { useDispatch, useSelector } from "react-redux"
import star_icon from "../assets/star.png"
import { useContext, useEffect } from "react"
import star_black from "../assets/black_star.png"
import { AppContext } from "../Context/AppContext"
import { completedTaskAdd, fetchTodos, toggleImpTask, uncompeltedTaskAdd } from "../Redux/features/TodoSlice"
import TaskItem from "./TaskItem"


const TaskList = () => {
  const { isList } = useContext(AppContext)
  const dispatch = useDispatch();
  const { items, completedTask, uncompletedTask } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos);
  }, [dispatch]);

  useEffect(() => {
    const filterunCompleted = items.filter((item) => item.completed === false);
    dispatch(uncompeltedTaskAdd(filterunCompleted))
  }, [items, dispatch])

  useEffect(() => {
    const filterCompleted = items.filter((item) => item.completed === true);
    dispatch(completedTaskAdd(filterCompleted))
  }, [])

  return (
    <div>
      {isList ?
        <div className={'my-4 px-4'}>
          {uncompletedTask?.map((item) => (
            <TaskItem item={item} key={item.id} />
          ))}
        </div> :
        <div className="flex flex-wrap gap-3">
          {uncompletedTask?.map((item) => (
            <div className="flex justify-between items-center sm:mx-auto gap-2 py-4 border w-72 md:w-96  px-5 py-10 my-2" key={item.id}>
              <div className="flex gap-2">
                <input type="checkbox" />
                <p>{item.todo}</p></div>
              <img src={item.important ? star_black : star_icon} alt="Star" className="w-6 text-black" onClick={(e) => {
                e.preventDefault()
                dispatch(toggleImpTask(item.id))
                console.log(item.important)
              }} />
            </div>))}
        </div>
      }
      <div className='my-4  px-4 '>
        <h1 className="">Completed</h1>
        {completedTask?.map((item) => (
          <TaskItem item={item} key={item.id} />))}
      </div>
    </div>

  )
}

export default TaskList
