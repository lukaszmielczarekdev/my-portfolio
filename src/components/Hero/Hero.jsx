import React from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/globalComponentsStyles";
import { WelcomeSection, Icon, IconsSection, Img } from "./HeroStyles";
import { TiArrowDownOutline } from "react-icons/ti";
import atom from "../../images/atom.svg";

const Hero = () => {
  return (
    <Section column hero>
      <WelcomeSection>
        <Img src={atom} />
        <SectionTitle main center>
          Hi, my name is Łukasz, <br />
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
