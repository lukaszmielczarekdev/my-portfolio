import React from "react";
import {
  BlogCard,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/globalComponentsStyles";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section column id={"projects"}>
      <SectionDivider />
      <br />
      <SectionTitle separate>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ title, description, image, tags, source, visit, id }) => (
            <BlogCard key={id}>
              <a href={visit} target="_blank" rel="noreferrer">
                <Img src={image} />
              </a>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr />
              </TitleContent>
              <SectionText justify smaller>
                {description}
              </SectionText>
              <div>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLink href={source} target="_blank" rel="noreferrer">
                  Code
                </ExternalLink>
                <ExternalLink href={visit} target="_blank" rel="noreferrer">
                  Live
                </ExternalLink>
              </UtilityList>
            </BlogCard>
          )
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
