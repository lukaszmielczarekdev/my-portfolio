import styled from "styled-components";

// Container
export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

//NavSection
export const NavSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

// NavTitle
export const NavigationTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  transition: 0.4s ease;
  margin: 1.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem;
  }
`;

//NavSection
export const IconsSection = styled.div`
  display: flex;
  align-content: center;
  justify-content: ${(props) => (props.center ? "center" : "")};
`;

// NavLink
export const NavigationLink = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.4s ease;
  margin: 1.5rem;
  &:hover {
    color: white;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 1rem;
  }
`;
