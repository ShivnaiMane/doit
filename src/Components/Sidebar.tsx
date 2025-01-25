import profile from "../assets/profile.png"
import hugeicon from "../assets/hugeicon.png"
import calendar from "../assets/calendar.png"
import carbon from "../assets/carbon.png"
import star from "../assets/star.png"
import image from "../assets/image.png"
import add from "../assets/add.png"
const Sidebar = () => {
  return (
    <div className="w-80  bg-lightGreen px-4 py-5 mt-12 " >
      <div className="absolute top-20 left-28 text-center " >
        <img src={profile} alt="Profile" className="w-28" />
        <p>Name</p>
      </div>
      <div className="flex flex-col mt-16 bg-white rounded p-3 ">
        <div className="flex gap-2 py-2 cursor-pointer hover:bg-lightGreen ">
          <img src={hugeicon} alt="" className="w-6 " />
          <p>All Tasks</p>
        </div>
        <div className="flex gap-2 py-2  cursor-pointer hover:bg-lightGreen ">
          <img src={calendar} alt="" className="w-6 " />
          <p>Today</p>
        </div>
        <div className="flex gap-2 py-2 cursor-pointer hover:bg-lightGreen ">
          <img src={star} alt="" className="w-6 " />
          <p>Important</p>
        </div>
        <div className="flex gap-2 py-2 cursor-pointer hover:bg-lightGreen ">
          <img src={carbon} alt="" className="w-6 " />
          <p>Planned</p>
        </div>
        <div className="flex gap-2 py-2 cursor-pointer hover:bg-lightGreen ">
          <img src={image} alt="" className="w-6 " />
          <p>Assiged to me</p>
        </div>
      </div>
      <div className="flex flex-col mt-3 bg-white rounded p-3 ">
        <div className="flex gap-2 py-2 cursor-pointer hover:bg-lightGreen ">
          <img src={add} alt="" className="w-6 " />
          <p>All List</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
