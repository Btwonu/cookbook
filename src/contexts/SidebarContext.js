import { createContext, useState, useContext } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(true);

  const toggleSidebar = () => {
    setIsOpened(isOpened ? false : true);
  };

  const contextValue = {
    isOpened,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
