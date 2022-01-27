import styled from "styled-components";

export const WelcomeSection = styled.div`
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
`;

//NavSection
export const IconsSection = styled.div`
  display: flex;
  align-content: center;
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  left: 1rem;
  justify-content: ${(props) => (props.center ? "center" : "")};

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
