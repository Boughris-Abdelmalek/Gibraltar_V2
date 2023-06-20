import { NavLink } from "react-router-dom";
import { keyframes, styled } from "styled-components";

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    min-height: 0;
  }
  100% {
    opacity: 1;
    visibility: visible;
    min-height: 100%;
  }
`;

const slideOutAnimation = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
    min-height: 100%;
  }

  100% {
    opacity: 0;
    visibility: hidden;
    min-height: 0;
  }
`;

export const Container = styled.header`
  height: 5rem;
  width: 100%;
`;

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 100%;
  background-color: black;
  color: white;
  padding: 0 1rem 0 2rem;

  
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  `;

export const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  
  &:nth-child(4) {
    justify-content: flex-end;
  }
  @media (max-width: 1150px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  aspect-ratio: 1;
  padding: 0 2rem;
  font-size: 1.25rem;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }

  &:hover {
    outline: 1px solid #555555;
  }

  @media (max-width: 1150px) {
    font-size: 1.25rem;
    aspect-ratio: 3/4;
  }

  @media (max-width: 1150px) {
    &:hover {
      outline: none;
    }
  }
`;

export const Logo = styled(NavLink)`
  min-width: 10rem;
  height: 100%;
  z-index: 3;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 1150px) {
    display: block;
    z-index: 3;
  }

  svg {
    width: 3rem;
    height: 100%;
  }
`;

export const BurgerMenuItems = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  z-index: 2;
  visibility: hidden;

  &.slide-in {
    animation-name: ${slideInAnimation};
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }

  &.slide-out {
    animation-name: ${slideOutAnimation};
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }

  a {
    min-height: 7rem;
  }

  @media (min-width: 1150px) {
    display: none;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;
