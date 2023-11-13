import React from "react";
import styled from "styled-components";
import HeaderLogOut from "../HeaderLogout";

const MessageListHeader = () => {
  return (
    <MessageListHeaderContainer>
      <LeftPart>
        <ImageWrapper
          src={
            "https://images.unsplash.com/photo-1697792480519-3e2e7eba4be0?auto=format&fit=crop&q=80&w=1392&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={"profile pic"}
        ></ImageWrapper>
        <HeaderText>
          <NameWrapper>Bikram Ghimire</NameWrapper>
          <ActiveText>Active 1 hour ago</ActiveText>
        </HeaderText>
      </LeftPart>
      <RightPart>
        <HeaderLogOut />
      </RightPart>
    </MessageListHeaderContainer>
  );
};

export default MessageListHeader;

const MessageListHeaderContainer = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
`;
const ImageWrapper = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const NameWrapper = styled.p``;

const ActiveText = styled.p`
  font-size: 12px;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
const RightPart = styled.div``;
