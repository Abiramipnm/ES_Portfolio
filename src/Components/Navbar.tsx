import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1.5rem 4rem;
  background-color: rgba(0, 0, 0, 0.86);
  display: flex;
  justify-content: center; /* center items by default */
  align-items: center;
  z-index: 999;
  font-family: sans-serif;
`;

const Brand = styled.a`
  position: absolute;
  left: 2rem;
  img {
    width: 50px;
    height: 35px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  color: #f8f9fa;
  font-weight: 600;
  cursor: pointer;
  font-size:2rem;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Brand href="#hero">
        {/* <img src={logo} alt="Logo" /> */}
      </Brand>
      <NavLinks>
        <NavLink>Portfolio</NavLink>
      </NavLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
