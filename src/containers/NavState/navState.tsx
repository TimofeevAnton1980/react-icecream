import React, { createContext, useState } from "react";

interface NavStateInterface {
  children: React.ReactNode;
}
type MenuContextInterface = {
  isMenuOpen: boolean;
  toggleMenuMode: () => void;
};

export const MenuContext = createContext<MenuContextInterface>({
  isMenuOpen: true,
  toggleMenuMode: () => {},
});

export const NavState = ({ children }: NavStateInterface) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
};
