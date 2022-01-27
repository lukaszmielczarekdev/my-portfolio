import React from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/globalComponentsStyles";
import { WelcomeSection, Icon, IconsSection } from "./HeroStyles";
import { TiArrowDownOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <Section column>
      <WelcomeSection>
        <SectionTitle main center>
          Hi, my name is Łukasz. <br />
          I'm a frontend developer.
        </SectionTitle>
        <SectionText high center>
          Passionate about technology, programming and learning new things.
        </SectionText>
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
