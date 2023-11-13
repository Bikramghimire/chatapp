import React from "react";
import { styled } from "styled-components";
import UserList from "./userList";
import MessageList from "./MessageList";

const Message = () => {
  return (
    <MessageContainer>
      <UserList />
      <MessageList />
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
