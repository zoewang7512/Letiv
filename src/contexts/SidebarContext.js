import React, { useState, createContext } from "react";
//create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //state
  const [isOpen, setIsOpen] = useState(false);
  const handeleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handeleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
