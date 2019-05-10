import React from 'react';
import Style from 'styled-components'

const StyleTopBar = Style.div `
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: none;
 flex-direction: row;
 position: fixed;
 height: 44px;
 background-color: #333;
`;

const TBContainer = Style.div `
 width: 100%;
 display: flex;
 justify-content: none;
 align-items: none;
 flex-direction: row;
 color: #fff;
 letter-spacing: 1px;
 padding: 0 10px;
 @media (min-width: 1280px) {
   width: 1280px;
 }
`;

const TBContainerLeft = Style.div `
 display: flex;
 justify-content: none;
 align-items: center;
 flex-direction: row;
 flex: 1;
 font-size: 11px;
`;

const TBLeftSpan = Style.span `
 cursor: pointer;
 margin-right: 25%;
 font-weight: bold;
`;

const TBContainerCenter = Style.div `
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: row;
 flex: 3;
 font-size: 9px;
`;

const TBCenterSpan = Style.span `
 cursor: pointer;
 margin-right: 5%;
 :last-child {
 margin-right: 0
 }
 :hover {
   text-decoration: underline;
 }
`;

const TBContainerRight = Style.div `
 display: flex;
 justify-content: flex-end;
 align-items: center;
 flex-direction: row;
 flex: 1;
 font-size: 11px;
 font-weight: bold;
`;

const TBRightSpan = Style.span `
 cursor: pointer;
`;

const TopBar = () => {
  return (
    <StyleTopBar>
      <TBContainer>
        <TBContainerLeft>
          <TBLeftSpan>TOPICS</TBLeftSpan><TBLeftSpan>SEARCH</TBLeftSpan>
        </TBContainerLeft>
        <TBContainerCenter>
          <TBCenterSpan>GENERAL</TBCenterSpan><TBCenterSpan>BROWNBAG</TBCenterSpan><TBCenterSpan>RANDOM</TBCenterSpan><TBCenterSpan>MUSIC</TBCenterSpan><TBCenterSpan>ANNOUNCEMENTS</TBCenterSpan>
        </TBContainerCenter>
        <TBContainerRight>
          <TBRightSpan>LOG IN</TBRightSpan>
        </TBContainerRight>
      </TBContainer>
    </StyleTopBar>
  )
}

export default TopBar;
