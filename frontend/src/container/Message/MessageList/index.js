import React from "react";
import styled from "styled-components";
import MessageListHeader from "../MessageListHeader";
import UserMessageList from "../userList/UserMessageList";

const MessageList = () => {
  return (
    <MessageListContainer>
      <MessageListHeader />
      <UserMessageList />
    </MessageListContainer>
  );
};

export default MessageList;

const MessageListContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  position: relative;
`;
