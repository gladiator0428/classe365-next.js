import React from "react";
import * as Styled from "./search.styles";
import { SearchIcon } from "@/components";

export const Search: React.FC = () => {
  return (
    <Styled.SearchWrapper>
      <h1>Free Business and Marketing resources</h1>
      <Styled.SearchInputWrapper>
        <input type="text" />
        <SearchIcon />
      </Styled.SearchInputWrapper>
      <Styled.SearchFilterWrapper>
        <span>Templates</span>
        <span>Help Articles</span>
        <span>Blog Articles</span>
        <span>ROI Calculator</span>
        <span>Help Videos</span>
        <span>Play Book</span>
      </Styled.SearchFilterWrapper>
    </Styled.SearchWrapper>
  );
};
