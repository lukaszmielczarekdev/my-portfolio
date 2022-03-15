import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  overflow: hidden;
  transition: 0.4s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 15px;
  -webkit-box-shadow: 0 5px 15px -10px ${(props) => props.theme.colors.shadow};
  -moz-box-shadow: 0 5px 15px -10px ${(props) => props.theme.colors.shadow};
  box-shadow: 0 5px 15px -10px ${(props) => props.theme.colors.shadow};
  text-align: center;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  padding: 1rem 0.2rem;
  font-size: ${(props) => (props.bigger ? "2rem" : "1.5rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.bigger ? "1.5rem" : "1rem")};
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

export const ExternalLink = styled.a`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  border-radius: 10px;
  transition: 0.5s;
  margin: 0.8rem;
  &:hover {
    transform: scale(1.1);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.6rem;
    padding: 0.4rem 0.6rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: ${(props) => props.theme.colors.primaryTransparent};
  margin: 0.5rem;
  font-size: 0.8rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
