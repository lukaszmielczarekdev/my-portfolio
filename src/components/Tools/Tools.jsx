import React from "react";
import { DiReact, DiJavascript1, DiCss3, DiHtml5 } from "react-icons/di";
import { SiStyledcomponents, SiJest } from "react-icons/si";
import { ToolsList, ToolsItem, ToolsParagraph, ToolsTitle } from "./ToolStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/globalComponentsStyles";

const Tools = () => {
  return (
    <Section column id={"tools"}>
      <SectionDivider />
      <br />
      <SectionTitle separate>Tools</SectionTitle>
      <ToolsTitle>Front-End</ToolsTitle>
      <ToolsParagraph>Experience with</ToolsParagraph>
      <ToolsList margin>
        <ToolsItem>
          <DiReact size={"2rem"} style={{ marginRight: "0.2rem" }} /> React.js
        </ToolsItem>
        <ToolsItem>
          <DiJavascript1 size={"2rem"} style={{ marginRight: "0.2rem" }} />
          JavaScript
        </ToolsItem>
        <ToolsItem>
          <DiCss3 size={"2rem"} style={{ marginRight: "0.2rem" }} /> CSS&nbsp;3
        </ToolsItem>
        <ToolsItem>
          <DiHtml5 size={"2rem"} style={{ marginRight: "0.2rem" }} />
          HTML&nbsp;5
        </ToolsItem>
        <ToolsItem>
          <SiJest size={"1.5rem"} style={{ marginRight: "0.5rem" }} /> Jest
        </ToolsItem>
        <ToolsItem>
          <SiStyledcomponents size={"2rem"} style={{ marginRight: "0.5rem" }} />
          Styled&nbsp;Components
        </ToolsItem>
      </ToolsList>
    </Section>
  );
};

export default Tools;
