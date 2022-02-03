import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  padding: ${(props) => (props.nopadding ? "0" : "3rem")};
  box-sizing: content-box;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => (props.nopadding ? "0" : "3rem")};
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) =>
      props.hero ? "0 1rem 0 1rem" : "3rem 1rem 1rem 1rem"};
    width: calc(100vw - 2rem);
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    padding-top: ${(props) => (props.hero ? ".5rem" : "")};
    justify-content: flex-start;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "2.8rem" : "2.5rem")};
  line-height: ${(props) => (props.main ? "3rem" : "3rem")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    120deg,
    #ffffff 20%,
    rgba(255, 255, 255, 0.66) 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: ${(props) => (props.separate ? "1.5rem" : "0.5rem")};
  margin-bottom: ${(props) => (props.separate ? "1.5rem" : "0.5rem")};
  padding: ${(props) => (props.main ? "4rem 0 1rem" : "0")};

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => (props.main ? "2.2rem" : "2rem")};
    line-height: ${(props) => (props.main ? "2.7rem" : "2.2rem")};
    margin-top: ${(props) => (props.separate ? "1rem" : "0.5rem")};
    margin-bottom: ${(props) => (props.separate ? "1rem" : "0.5rem")};
    padding: ${(props) => (props.main ? "2rem 0 1rem" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 3rem;
    font-size: ${(props) => (props.main ? "1.5rem" : "1.8rem")};
    line-height: ${(props) => (props.main ? "1.8rem" : "2rem")};
    margin-top: ${(props) => (props.separate ? "1rem" : "0.5rem")};
    margin-bottom: ${(props) => (props.separate ? "1rem" : "0.5rem")};
    padding: ${(props) => (props.main ? "1rem 0 0.5rem" : "0")};
    max-width: 100%;
    text-align: center;
    align-self: center;
  }
  @media ${(props) => props.theme.breakpoints.smlandscape} {
    font-size: ${(props) => (props.main ? "1.5rem" : "2rem")};
    line-height: ${(props) => (props.main ? "1.8rem" : "2.2rem")};
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: ${(props) => (props.smaller ? "1.1rem" : "1.2rem")};
  line-height: ${(props) => (props.high ? "2.5rem" : "2rem")};
  font-weight: 300;
  padding-bottom: 1.8rem;
  color: rgba(255, 255, 255, 0.5);
  max-width: ${(props) => (props.main ? "50%" : "")};
  text-align: ${(props) => (props.justify ? "justify" : "")};

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 650px;
    max-width: ${(props) => (props.main ? "50%" : "")};
    font-size: ${(props) => (props.smaller ? "1rem" : "1rem")};
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.smlandscape} {
    max-width: ${(props) => (props.main ? "50%" : "")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: ${(props) => (props.main ? "80%" : "")};
    font-size: ${(props) => (props.smaller ? "1rem" : "1rem")};
    padding: ${(props) => (props.padding ? "1rem" : "")};
    text-align: ${(props) => (props.center ? "center" : "")};
    align-self: center;
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: white;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

  margin: ${(props) => (props.divider ? "4rem 0" : "")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;
  }
`;
