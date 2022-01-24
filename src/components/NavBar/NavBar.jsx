import React from "react";
import {
  Container,
  NavSection,
  NavigationTitle,
  NavigationLink,
} from "./NavBarStyles";

const NavBar = () => {
  return (
    <Container>
      <NavSection>
        <NavigationTitle>Portfolio</NavigationTitle>
      </NavSection>
      <NavSection>
        <NavigationLink href="#projects">Projects</NavigationLink>
        <NavigationLink href="#technologies">Technologies</NavigationLink>
        <NavigationLink href="#about">About</NavigationLink>
      </NavSection>
    </Container>
  );
};

export default NavBar;
