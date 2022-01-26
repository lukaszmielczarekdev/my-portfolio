import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
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
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  padding: 1rem;
  margin: 1rem;
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
  background: linear-gradient(
    120deg,
    #ffffff 20%,
    rgba(255, 255, 255, 0.66) 50%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 1rem 0.2rem;
  font-size: ${(props) => (props.title ? "2rem" : "1.5rem")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.title ? "1.5rem" : "1rem")};
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

export const ExternalLink = styled.a`
  color: white;
  font-size: 0.8rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid white;
  border-radius: 10px;
  transition: 0.5s;
  margin: 1rem;
  &:hover {
    background: white;
    color: black;
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
  color: white;
  margin: 0.5rem;
  font-size: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.8rem;
  }
`;
