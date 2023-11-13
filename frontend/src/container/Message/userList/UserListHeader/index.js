import React from "react";
import { styled } from "styled-components";
import UserCard from "../UserCard";

const UserListHeader = () => {
  return (
    <UserListHeaderContainer>
      <div
        style={{
          position: "sticky",
          top: "0px",
          border: "1px solid #ddd",
          backgroundColor: "#fff  ",
        }}
      >
        <h3
          style={{
            marginBottom: "20px",
          }}
        >
          Chats
        </h3>
        <InputContainer>
          <InputWrapper placeholder="Search People..." />
        </InputContainer>
      </div>

      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return <UserCard key={index} />;
      })}
    </UserListHeaderContainer>
  );
};

export default UserListHeader;

const UserListHeaderContainer = styled.div`
  border: 1px solid #eee;
  height: 100vh;
  overflow-y: scroll;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const InputWrapper = styled.input`
  width: 80%;
  height: 35px;
  border-radius: 8px;
  outline: none;
  padding: 0 20px;
  border: 1px solid #333030;
  color: #edf5e1;
  background: transparent;

  &::placeholder {
    color: #696365;
  }
  &:focus {
    border: 1px solid #fc5c7d;
    box-shadow: 0px 0px 5px 0.5px #fc5c7d;
  }
`;
