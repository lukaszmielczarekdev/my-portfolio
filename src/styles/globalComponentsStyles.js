import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  padding: ${(props) => (props.nopadding ? "0" : "3rem")};
  margin: 0 auto;
  box-sizing: content-box;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => (props.nopadding ? "0" : "1.5rem")};
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "1rem")};
    width: calc(100vw - 2rem);
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "4rem" : "2.8rem")};
  line-height: ${(props) => (props.main ? "4.5rem" : "3.2rem")};
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
  margin-bottom: 0.5rem;
  padding: ${(props) => (props.main ? "4rem 0 1rem" : "0")};

  @media ${(props) => props.theme.breakpoints.lg} {
    font-size: ${(props) => (props.main ? "2.2rem" : "1.8rem")};
    line-height: ${(props) => (props.main ? "2.7rem" : "2.2rem")};
    margin-bottom: 0.8rem;
    padding: ${(props) => (props.main ? "2rem 0 1rem" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
    line-height: 3rem;
    font-size: ${(props) => (props.main ? "1.5rem" : "1.8rem")};
    line-height: ${(props) => (props.main ? "1.8rem" : "2.2rem")};
    margin-bottom: 0.5rem;
    padding: ${(props) => (props.main ? "1rem 0 0.5rem" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: 300;
  padding-bottom: 1.8rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 650px;
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
    line-height: 1.3rem;
    padding-bottom: 1rem;
  }
`;
