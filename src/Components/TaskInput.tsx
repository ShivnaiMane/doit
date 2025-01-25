import drop_down from "../assets/dropdown.png"
import bell_icon from "../assets/bell.png"
import loop from "../assets/loop.png"
import calendar from "../assets/calendar.png"
import { useState } from "react"
const TaskInput = () => {
  const [input, setInput] = useState("")

  return (<>
    <div className="flex flex-col gap-2 bg-gradient-to-t from-lightGreen h-48 w-full">
      <div className="flex items-center gap-1">
        <p className="text-gray-500">To do</p>
        <img src={drop_down} alt="" className="w-3 h-2" />
      </div >
      <div className="flex flex-col gap-5">
        <div className="flex items-center mt-5 rounded-md pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            id="task"
            name="task"
            type="text"
            placeholder="Add A Task"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mt-6 px-3">
          <div className="flex gap-3 ">
            <img src={bell_icon} alt="Bell-icon" className="w-5 h-5" />
            <img src={loop} alt="Loop" className="w-5 h-5" />
            <img src={calendar} alt="Drop-Down" className="w-5 h-5" />
          </div>
          <button className="text-white bg-customGreen flex items-center rounded-md px-3 py-2 text-sm font-semibold">Add Task</button>
        </div>
        <div>
        </div>
      </div>
    </div>
  </>
  )
}

export default TaskInput
