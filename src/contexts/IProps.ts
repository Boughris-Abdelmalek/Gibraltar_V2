export interface IProps {
  children: JSX.Element[] | JSX.Element;
}

export interface IContext {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}
