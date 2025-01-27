import { createContext, useState } from "react";


export const AppContext = createContext()


const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isList, setIsList] = useState(true)
  const [isTaskbar, setIsTaskbar] = useState(false)



  return <AppContext.Provider value={{ isSidebar, setIsSidebar, isList, setIsList, isTaskbar, setIsTaskbar }}>
    {children}
  </AppContext.Provider>
}

export default AppProvider