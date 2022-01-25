import styled from "styled-components";

// Tools title
export const ToolsTitle = styled.h4`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 0.5rem;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    line-height: 1.5rem;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;

// Tools paragraph
export const ToolsParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.75);
  display: inline-block;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
    line-height: 1.2rem;
    align-items: center;
    justify-content: center;
    align-self: center;
  }
`;

// Tools item
export const ToolsItem = styled.li`
  font-size: 1rem;
  line-height: 1.2rem;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

//Tools list
export const ToolsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  margin-top: ${(props) => (props.margin ? "1rem" : "")};
  justify-content: ${(props) => (props.center ? "center" : "")};

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    flex-direction: column;
  }
`;
