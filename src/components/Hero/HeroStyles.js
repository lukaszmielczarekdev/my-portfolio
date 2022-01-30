import styled from "styled-components";

export const WelcomeSection = styled.div`
  width: 100%;
  min-height: 85vh;
  flex-direction: column;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 80vh;
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
    bottom: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    align-self: center;
    bottom: 0.5rem;
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
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  width: 50%;
  height: auto;
  opacity: 90%;
  z-index: -1;
  position: absolute;
  right: 0;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;

  @media ${(props) => props.theme.breakpoints.lg} {
    top: auto;
    width: 50%;
    right: 5%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 35%;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    width: 35%;
  }

  @media ${(props) => props.theme.breakpoints.xslandscape} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 0;
    left: 0;
    width: 60%;
    right: 0;
    position: relative;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    width: 20%;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: logo-spin infinite 150s linear;
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
