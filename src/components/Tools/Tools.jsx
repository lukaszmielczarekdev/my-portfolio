import React from "react";
import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiJira,
} from "react-icons/di";
import { SiStyledcomponents, SiJest, SiRedux } from "react-icons/si";
import { ToolsList, ToolsItem, ToolsParagraph, ToolsTitle } from "./ToolStyles";
import { Section, SectionTitle } from "../../styles/globalComponentsStyles";

const Tools = () => {
  return (
    <Section column id={"tools"}>
      <SectionTitle separate>Tools</SectionTitle>
      <ToolsTitle>Front-End</ToolsTitle>
      <ToolsParagraph>Experience with:</ToolsParagraph>
      <ToolsList margin>
        <ToolsItem>
          <DiReact size={"2rem"} style={{ marginRight: "0.1rem" }} /> React.js
        </ToolsItem>
        <ToolsItem>
          <DiJavascript1 size={"2rem"} style={{ marginRight: "0.1rem" }} />
          JavaScript
        </ToolsItem>
        <ToolsItem>
          <DiCss3 size={"2rem"} style={{ marginRight: "0.1rem" }} /> CSS&nbsp;3
        </ToolsItem>
        <ToolsItem>
          <DiHtml5 size={"2rem"} style={{ marginRight: "0.1rem" }} />
          HTML&nbsp;5
        </ToolsItem>
        <ToolsItem>
          <SiJest size={"1.5rem"} style={{ marginRight: "0.3rem" }} /> Jest
        </ToolsItem>
        <ToolsItem>
          <SiRedux size={"1.5rem"} style={{ marginRight: "0.3rem" }} />
          Redux
        </ToolsItem>
        <ToolsItem>
          <SiStyledcomponents size={"2rem"} style={{ marginRight: "0.3rem" }} />
          Styled Components
        </ToolsItem>
        <ToolsItem>
          <DiJira size={"1.8rem"} />
          JIRA
        </ToolsItem>
      </ToolsList>
    </Section>
  );
};

export default Tools;
