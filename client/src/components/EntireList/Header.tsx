import React from "react";
import styled from "styled-components";
import Menu_icon from "../../asset/icon/menu.png";

const ALL_LIST = "전체종목";
const INTEREST_LIST = "관심종목";
const HOLDING_LIST = "보유종목";

const Header: React.FC<HeaderProps> = ({ currentListType, onChangeListType, isMenuOpen, setMenuOpen }) => {
  return (
    <HeaderWrapper>
      <Icon src={Menu_icon} alt="menu icon" onClick={() => setMenuOpen(!isMenuOpen)} />
      <HeaderText>{currentListType}</HeaderText>
      {isMenuOpen && (
        <SlideMenu>
          <MenuItem1
            onClick={() => {
              onChangeListType(ALL_LIST);
              setMenuOpen(false);
            }}
          >
            {ALL_LIST}
          </MenuItem1>
          <MenuItem
            onClick={() => {
              onChangeListType(INTEREST_LIST);
              setMenuOpen(false);
            }}
          >
            {INTEREST_LIST}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onChangeListType(HOLDING_LIST);
              setMenuOpen(false);
            }}
          >
            {HOLDING_LIST}
          </MenuItem>
        </SlideMenu>
      )}
    </HeaderWrapper>
  );
};

type HeaderProps = {
  currentListType: string;
  onChangeListType: (type: "전체종목" | "관심종목" | "보유종목") => void;
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid black;
`;

const Icon = styled.img`
  margin: 0px 10px 0px 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const HeaderText = styled.span`
  margin-top: 2px;
  font-size: 18px;
`;

const SlideMenu = styled.div`
  z-index: 30;
  position: absolute;
  top: 100%;
  left: 0;
  width: 247px;
  background-color: #f7f7f7;
  border-top: 1px solid black;
  border-left: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border: none;
  background-color: white;
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid black;
  font-size: 15.5px;

  &:hover {
    background-color: #f2f2f2;
    color: darkslategray;
  }
`;
const MenuItem1 = styled(MenuItem)`
  border-left: 4px solid #4479c2;
`;

export default Header;
