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
    min-height: 85vh;
  }
`;

//Call to action
export const LinkButton = styled.a`
  color: rgba(255, 255, 255, 0.75);
  background: transparent;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid white;
  border-radius: 10px;
  transition: 0.5s;
  width: 15%;
  width: fit-content;
  &:hover {
    background: rgba(255, 255, 255, 0.75);
    color: black;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    width: 30%;
    width: fit-content;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
    align-self: center;
    width: auto;
    width: fit-content;
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
  width: 35%;
  height: auto;
  opacity: 90%;
  z-index: -1;
  position: absolute;
  right: 0;
  -ms-flex-item-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    top: auto;
    right: 0;
    position: relative;
    width: 30%;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    top: auto;
    position: absolute;
    width: 30%;
    right: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 0;
    left: 0;
    width: 50%;
    right: 0;
    position: relative;
    align-self: center;
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
