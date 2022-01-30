import styled from "styled-components";

export const WelcomeSection = styled.div`
  width: 100%;
  min-height: 85vh;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    justify-content: flex-start;
  }
`;

//NavSection
export const IconsSection = styled.div`
  display: flex;
  align-content: center;
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  justify-content: ${(props) => (props.center ? "center" : "")};

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    bottom: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    align-self: center;
  }
`;

// Icon
export const Icon = styled.a`
  transition: 0.4s ease;
  color: rgba(255, 255, 255, 0.7);
  margin: 0.5rem;
  &:hover {
    color: white;
    opacity: 1;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

// Logo
export const Img = styled.img`
  /* position: absolute;
  top: 5rem; */
  width: 100%;
  height: auto;
  opacity: 90%;
  z-index: -1;
  transition: 0.4s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
