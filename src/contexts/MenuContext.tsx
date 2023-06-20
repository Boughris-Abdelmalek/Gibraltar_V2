import React, { createContext, useState } from "react";
import { IContext, IProps } from "./IProps";

export const MenuContext = createContext<IContext | null>(null);

export const MenuProvider: React.FC<IProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const value = {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
