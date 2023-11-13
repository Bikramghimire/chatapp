import React from "react";
import { styled } from "styled-components";
import UserListHeader from "./UserListHeader";

const UserList = () => {
  return (
    <UserListContainer>
      <UserListHeader />
    </UserListContainer>
  );
};

export default UserList;

const UserListContainer = styled.div`
  width: 400px;
  height: auto;
`;
