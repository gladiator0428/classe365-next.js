import React from "react";
import { AppLayout } from "@/layouts";
import * as Section from "@/modules/roi";

const ROICalc: React.FC = () => {
  return (
    <AppLayout name="roi" is_new_book={true}>
      <Section.ROITitle />
    </AppLayout>
  );
};

export default ROICalc;
