import { useContext } from "react"
import Sidebar from "./Sidebar"
import { AppContext } from "../Context/AppContext"

const Home = () => {
  const {isSidebar} =useContext(AppContext)
  return (
    <div className="flex mt-3 px-8">
      {isSidebar?<Sidebar/>:""}
    </div>
  )
}

export default Home
