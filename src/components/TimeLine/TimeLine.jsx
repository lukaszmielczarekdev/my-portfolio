import React from "react";
import AliceCarousel from "react-alice-carousel";
import { breakpoints } from "./carouselConfig";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css";
import { TimeLineData } from "../../constants/constants";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/globalComponentsStyles";
import {
  CarouselItemContainer,
  CarouselTitle,
  CarouselText,
} from "./TimeLineStyles";

const TimeLine = () => {
  return (
    <Section column id={"about"}>
      <SectionTitle separate>About Me</SectionTitle>
      <SectionText padding center>
        Programming is my passion that requires a lot of commitment. I have been
        dealing with the front-end since 2020. Below is a brief summary of my
        programming activities that are important to me.
      </SectionText>
      <AliceCarousel
        controlsStrategy={"responsive"}
        responsive={breakpoints}
        keyboardNavigation
        items={TimeLineData.map((item) => (
          <CarouselItemContainer>
            <CarouselTitle center smaller>
              {item.year}
            </CarouselTitle>
            <CarouselText center smaller>
              {item.text}
            </CarouselText>
          </CarouselItemContainer>
        ))}
      />
    </Section>
  );
};

export default TimeLine;
