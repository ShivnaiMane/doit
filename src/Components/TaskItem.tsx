import star_black from "../assets/black_star.png"
import star_icon from "../assets/star.png"
import { useDispatch } from "react-redux"
import { toggleImpTask } from "../Redux/features/TodoSlice"


const TaskItem = ({ item }) => {
  const dispatch = useDispatch()
  const handleToggleImp = (e) => {
    e.preventDefault();
    dispatch(toggleImpTask(item.id))
    console.log(item.important)
  }
  return (
    <>
      <div className="flex justify-between items-center border-b-2 py-4" key={item.id} >
        <div className="flex gap-2">
          {item.completed ? <input type="checkbox" checked={true} readOnly className="w-4" /> : <input type="checkbox" className="w-4 " />}
          <p className={item.completed ? "line-through" : ""}>{item.todo}</p></div>
        <img src={item.important ? star_black : star_icon} alt="Star" className="w-6 text-black" onClick={handleToggleImp} />
      </div >
    </>
  )
}

export default TaskItem
