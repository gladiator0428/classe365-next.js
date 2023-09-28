import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { STRAPI_API } from "@/config";
import * as Styled from "./experience.styles";
import * as Data from "./data";

type Props = {
  title: string;
  data: {
    subtitle: string;
    icon: any;
    color: string;
    title: string;
    text: string;
  }[];
};

const { experiences } = Data;
export const Experience: React.FC<Props> = ({ data = experiences, title }) => {
  return (
    <Styled.ExperienceSectionWrapper>
      <Styled.TitleWrapper>
        <h1>{title}</h1>
      </Styled.TitleWrapper>
      <Styled.ImageWrapper>
        <img src="/assets/images/experience.png" alt="" />
      </Styled.ImageWrapper>
      <Styled.ExperienceContentWrapper>
        {data?.map((row, index) => (
          <Styled.ExperienceItemWrapper key={index} color={row.color}>
            <h3 style={{ color: row.color }}>{row.subtitle}</h3>
            {/* {row.icon} */}
            <img
              src={row.icon.url ? STRAPI_API + row.icon?.url : row.icon}
              alt=""
            />
            <h2>{row.title}</h2>
            <p>{row.text}</p>
            <h4>
              Try it Free <BsArrowRight />
            </h4>
            <div></div>
          </Styled.ExperienceItemWrapper>
        ))}
      </Styled.ExperienceContentWrapper>
    </Styled.ExperienceSectionWrapper>
  );
};