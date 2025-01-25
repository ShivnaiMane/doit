import { createContext, useEffect, useState } from "react";


export const AppContext = createContext()


const AppProvider = ({ children }) => {

  const [isSidebar, setIsSidebar] = useState(false)


  return <AppContext.Provider value={{ isSidebar, setIsSidebar }}>
    {children}
  </AppContext.Provider>
}

export default AppProvider