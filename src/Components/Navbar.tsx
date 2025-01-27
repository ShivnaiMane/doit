import menu from "../assets/menu.png";
import search from "../assets/search.png";
import app_grid from "../assets/app-grid.png";
import right_icon from "../assets/right_menu.png";
import theme from "../assets/theme.png";
import logo_mark from "../assets/logomark.png";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const { setIsSidebar, setIsList, isList } = useContext(AppContext)
  const handleSidebar = () => {
    setIsSidebar((pre) => !pre)
  }

  return (
    <div className="flex justify-between py-2 px-8 items-center" >
      <div className="flex justify-between py-4 items-center gap-2 ">
        <img src={menu} alt="Menu" className="w-6 h-6" onClick={handleSidebar} />
        <div className="flex items-center">
          <img src={logo_mark} alt="LogoMark" className="w-8 h-8" />
          <p className="text-2xl text-customGreen font-semibold">DoIt</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img src={search} alt="Sarch" className="w-6 h-6" />
        <div>{isList ? <img src={app_grid} alt="App-grid" className="w-6 h-6" onClick={() => setIsList(false)} /> : <img src={right_icon} alt="App-grid" className="w-6 h-4" onClick={() => setIsList(true)} />}</div>
        <img src={theme} alt="TTheme" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
