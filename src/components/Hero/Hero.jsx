import React from "react";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/globalComponentsStyles";
import { WelcomeSection, Img, LinkButton } from "./HeroStyles";
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
        <SectionText high center main>
          Passionate about technology, programming and learning new things.
        </SectionText>
        <LinkButton href={"#projects"}>Learn more...</LinkButton>
      </WelcomeSection>
    </Section>
  );
};

export default Hero;
