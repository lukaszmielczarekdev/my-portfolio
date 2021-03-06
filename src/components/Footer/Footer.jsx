import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IconsSection } from "./FooterStyles";
import {
  FooterContainer,
  LinkColumn,
  LinkItem,
  ItemList,
  LinkTitle,
  FooterParagraph,
} from "./FooterStyles";
import { Icon } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterParagraph>Thanks for scrolling.</FooterParagraph>
      <ItemList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:lukasz.mielczarek.dev@gmail.com">
            lukasz.mielczarek.dev@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Social</LinkTitle>
          <IconsSection>
            <Icon
              href={"https://github.com/lukaszmielczarekdev"}
              target="_blank"
            >
              <AiFillGithub size={"2rem"} />
            </Icon>
            <Icon
              href={"https://www.linkedin.com/in/łukasz-mielczarek-6282aa214/"}
              target="_blank"
            >
              <AiFillLinkedin size={"2rem"} />
            </Icon>
          </IconsSection>
        </LinkColumn>
      </ItemList>
    </FooterContainer>
  );
};

export default Footer;
