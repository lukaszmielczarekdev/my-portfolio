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
        <NavigationTitle>
          &#60;&nbsp;&#47;&nbsp;&#62;&nbsp;|&nbsp;Łukasz&nbsp;Mielczarek
        </NavigationTitle>
      </NavSection>
      <NavSection>
        <NavigationLink href="#projects">Projects</NavigationLink>
        <NavigationLink href="#tools">Tools</NavigationLink>
        <NavigationLink href="#about">About</NavigationLink>
      </NavSection>
    </Container>
  );
};

export default NavBar;
