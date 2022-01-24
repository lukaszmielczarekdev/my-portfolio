import React from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/globalComponentsStyles";
import { WelcomeSection, Icon, IconsSection } from "./HeroStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TiArrowDownOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <Section column>
      <WelcomeSection>
        <SectionTitle main center>
          Hi, my name is Łukasz. <br />
          I'm a frontend developer.
        </SectionTitle>
        <SectionText>
          Passionate about technology, programming and learning new things.
        </SectionText>
        <IconsSection>
          <Icon href={"https://github.com/lukaszmielczarekdev"} target="_blank">
            <AiFillGithub size={"2.5rem"} />
          </Icon>
          <Icon
            href={"https://www.linkedin.com/in/łukasz-mielczarek-6282aa214/"}
            target="_blank"
          >
            <AiFillLinkedin size={"2.5rem"} />
          </Icon>
        </IconsSection>
        <IconsSection center margin>
          <Icon href={"#projects"}>
            <TiArrowDownOutline size={"2.5rem"} />
          </Icon>
        </IconsSection>
      </WelcomeSection>
    </Section>
  );
};

export default Hero;
