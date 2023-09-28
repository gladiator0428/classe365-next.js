import React from "react";
import * as Footer from "@/modules/footer";
import * as Section from "@/modules/demo";
import { Trusted } from "@/modules/solution/institutes";
import { Seo } from "@/components";
import { seo_lists } from "@/layouts/AppLayout/seo";

const Demo: React.FC = () => {
  return (
    <React.Fragment>
      <Seo {...seo_lists["pricing"]} />
      <Section.Landing />
      <Section.Schedule />
      <Section.Videos />
      <Section.Calendar />
      <Section.Access />
      <Trusted />
      <Footer.Navigation />
    </React.Fragment>
  );
};

export default Demo;
