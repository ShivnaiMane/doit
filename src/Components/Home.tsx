import { useContext } from "react"
import Sidebar from "./Sidebar"
import { AppContext } from "../Context/AppContext"
import TaskInput from "./TaskInput"

const Home = () => {
  const { isSidebar, } = useContext(AppContext)
  return (
    <div className="flex flex-col md:flex-row gap-6 sm:gap-4 mt-3 px-4 ">
      {isSidebar ? <Sidebar /> : ""}
      <TaskInput />
    </div>
  )
}

export default Home
