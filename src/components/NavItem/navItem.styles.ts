import { styled } from "styled-components";

export const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;
  @media screen and (max-width: 1024px) {
    cursor: pointer;
    padding: 10px 0;
    flex-wrap: wrap;
  }
`;

export const NavLabel = styled.div`
  color: #1e2123;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 4px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const SubMenuWrapper = styled.div<{ active?: string }>`
  position: absolute;
  left: 0;
  top: 30px;
  visibility: ${({ active }) => (active ? "visible" : "hidden")};
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: all 0.3s;
  background-color: #fff;
  box-shadow: 0 0 2px 2px #00000010;
  padding: 8px 10px;
  border-radius: 8px;
  z-index: 10;
  &.sub-menu {
    right: -260px;
    left: auto;
    top: 0;
  }
  @media screen and (max-width: 1024px) {
    position: static;
    transition: none;
    box-shadow: none;
    width: 100%;
    height: ${({ active }) => (active ? "fit-content" : "0")};
    padding: ${({ active }) => (active ? "8px 10px" : "0")};
    &.sub-menu {
    }
  }
`;

export const SubMenuItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  padding: 10px;
  width: 230px;
  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    svg {
      transform: rotate(90deg);
      margin-left: 4px;
    }
  }
`;

export const MegaMenuWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;
`;

export const SolutionsMegaMenuWrapper = styled.div`
  max-width: 1240px;
  width: 95%;
  border-radius: 12px;
  background: #fff;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
`;

export const MoreMegaMenuWrapper = styled.div`
  max-width: 1020px;
  width: 95%;
  border-radius: 12px;
  background: #fff;
  padding: 40px;
  box-shadow: 0px 4px 20px 0px rgba(84, 84, 84, 0.25);
`;

export const SolutionsMegaMenuGridItem = styled.div`
  h1 {
    color: #1e2123;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 18px;
  }
`;

export const MegaMenuItemWrapper = styled.div`
  padding: 16px;
  &.no-desc {
    padding: 8px 16px;
  }
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  &:hover {
    background: #fafafa;
  }
  .icon-wrapper {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    border-radius: 6px;
    font-size: 20px;
    background: #fafafa;
    color: #3b3f42;
  }
  .item-container {
    h3 {
      color: #3b3f42;
      font-size: 16px;
      font-weight: 600;
    }
    p {
      color: #7c7c7c;
      font-size: 14px;
      font-weight: 400;
      margin-top: 4px;
    }
  }
`;
