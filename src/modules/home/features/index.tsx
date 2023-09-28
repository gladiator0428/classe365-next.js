import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { STRAPI_API } from "@/config";
import * as Comp from "@/components";
import * as Styled from "./features.styles";
import * as Data from "./data";

type Props = {
  icon: any;
  subtitle: string;
  text: string;
  title: string;
  image: any;
  data: {
    title: string;
    subtitle: string;
    image: any;
    is_old: boolean;
  }[];
};

const { features } = Data;

export const Features: React.FC<Props> = ({
  data = features,
  icon,
  image,
  subtitle,
  text,
  title,
}) => {
  return (
    <Styled.FeaturesWrapper>
      <Styled.FeaturesInfoWrapper>
        <Styled.FeaturesDescription>
          <img src={icon?.url ? STRAPI_API + icon?.url : icon} alt="" />
          <h2>{subtitle}</h2>
          <p>{title}</p>
        </Styled.FeaturesDescription>
        <Styled.FeatureInfo>
          <Image
            src={image?.url ? STRAPI_API + image?.url : image}
            alt="Feature"
            width={125}
            height={125}
          />
          <p>{text}</p>
        </Styled.FeatureInfo>
      </Styled.FeaturesInfoWrapper>
      <Styled.FeaturesContentWrapper>
        <Swiper
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            {data
              ?.filter((f) => !f.is_old)
              .map((row, index) => (
                <Comp.FeatureCard key={index} {...row} />
              ))}
          </SwiperSlide>
          <SwiperSlide>
            {data
              ?.filter((f) => f.is_old)
              .map((row, index) => (
                <Comp.FeatureCard key={index} {...row} />
              ))}
          </SwiperSlide>
        </Swiper>
      </Styled.FeaturesContentWrapper>
      <Styled.FeaturesSwiper>
        {data && (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            freeMode={true}
            loop
            className="mySwiper"
            modules={[FreeMode]}
          >
            {data?.map((row, index) => (
              <SwiperSlide key={index}>
                <Comp.FeatureCard {...row} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Styled.FeaturesSwiper>
    </Styled.FeaturesWrapper>
  );
};