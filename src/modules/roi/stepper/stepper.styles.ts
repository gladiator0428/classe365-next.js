import styled from "styled-components";

export const ROIStepperWrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    left: 0;
    right: 0;
    height: 260px;
    top: 35px;
    position: absolute;
    background: linear-gradient(
      180deg,
      #815afc 0%,
      rgba(137, 193, 244, 0.44) 74.48%,
      rgba(255, 255, 255, 0.25) 99.48%
    );
  }
`;

export const ROIStepperContainer = styled.div`
  margin: auto;
  position: relative;
  z-index: 1;
  margin-top: 42px;
  & > p {
    color: #7c7c7c;
    font-size: 14px;
    font-weight: 400;
    max-width: 853px;
    margin: auto;
    width: 95%;
    margin-top: 24px;
    margin-bottom: 128px;
    line-height: 20px; /* 142.857% */
  }
`;
