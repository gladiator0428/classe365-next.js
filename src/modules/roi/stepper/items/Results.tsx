import React from "react";
import * as Styled from "./items.styles";

export const Results: React.FC = () => {
  return (
    <Styled.ItemCardWrapper width={1110}>
      <Styled.CardTitle>
        {
          "By using Classe365, <company name> can save <1,097,847> in the next three years"
        }
      </Styled.CardTitle>
      <p style={{ marginLeft: 0 }}>
        {
          "These are the results based on the default values in the tool or entries you have made. Click on the Inputs button to review the high-level assumptions or the Costs and Benefits links below to review the detailed calculations."
        }
      </p>
      <Styled.ResultSummaryWrapper>
        <Styled.ResultSummaryTitle>
          <h4>Financial Summary</h4>
          <div>
            <p>Costs</p>
            <p>Benefits</p>
            <p>Net Cash Flow</p>
            <p>Cumulative Cash Flow</p>
          </div>
          <h2>ROI</h2>
        </Styled.ResultSummaryTitle>
        <Styled.ResultSummaryYear>
          <Styled.ResultSummaryYearGrid>
            <div>
              <h4>Year1</h4>
              <div>
                <p>2,156</p>
                <p>761,869</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </div>
            <div>
              <h4>Year1</h4>
              <div>
                <p>2,156</p>
                <p>761,869</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </div>
            <div>
              <h4>Year1</h4>
              <div>
                <p>2,156</p>
                <p>761,869</p>
                <p>759,713</p>
                <p>759,713</p>
              </div>
            </div>
          </Styled.ResultSummaryYearGrid>
          <h2>352.37%</h2>
        </Styled.ResultSummaryYear>
        <Styled.ResultSummaryChart>
          <h1>Cumulative Cash Flow</h1>
        </Styled.ResultSummaryChart>
      </Styled.ResultSummaryWrapper>
    </Styled.ItemCardWrapper>
  );
};
