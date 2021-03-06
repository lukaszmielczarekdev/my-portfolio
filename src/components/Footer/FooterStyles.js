import styled from "styled-components";

// Wrapper
export const FooterContainer = styled.section`
  max-width: 80%;
  padding: 2rem;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 2rem 0 0 0;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    padding: 0;
  }
`;

// Link item
export const LinkItem = styled.a`
  font-size: 1rem;
  line-height: 1.8rem;
  color: ${(props) => props.theme.colors.primaryTransparent};
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transform: scale(1.05);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-bottom: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 0.8rem;
    line-height: 1.5rem;
    display: flex;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    line-height: 1.2rem;
    display: flex;
    align-items: center;
  }
`;

// Link list
export const ItemList = styled.ul`
  justify-items: center;
  border-top: 1px solid rgba(30, 30, 30, 0.1);
  display: flex;
  padding: 3rem 0 1.5rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 2rem 0 1rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 2rempx 0 1rem;
    gap: 1rem;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    width: 100%;
    padding: 1rem 0.25rem 1rem;
    gap: 5px;
  }
`;

// Column
export const LinkColumn = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    width: 100%;
    padding: 2rem 0.25rem 1rem;
    gap: 5px;
  }
`;

// Link title
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryTransparent};
  margin-right: 1rem;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin-right: 0rem;
    margin-bottom: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
    line-height: 1rem;
  }
`;

//Icons Section
export const IconsSection = styled.div`
  display: flex;
  align-content: center;
  justify-items: center;
  margin-top: ${(props) => (props.margin ? "5rem" : "")};
  justify-content: ${(props) => (props.center ? "center" : "")};

  @media ${(props) => props.theme.breakpoints.sm} {
    align-self: center;
  }
`;

// Icon
export const Icon = styled.a`
  transition: 0.4s ease;
  color: ${(props) => props.theme.colors.primaryTransparent};
  margin: 0 0.5rem 0 0.5rem;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    opacity: 1;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

// Footer paragraph
export const FooterParagraph = styled.p`
  margin: 2rem 0 2rem 0;
  font-size: 1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.colors.primaryTransparent};
  display: flex;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
    line-height: 1.2rem;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;
