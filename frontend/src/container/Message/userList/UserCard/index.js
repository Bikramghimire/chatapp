import React from "react";
import { styled } from "styled-components";

const UserCard = () => {
  return (
    <UserCardContainer>
      <ImageWrapper
        src={
          "https://images.unsplash.com/photo-1697792480519-3e2e7eba4be0?auto=format&fit=crop&q=80&w=1392&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"profile pic"}
      ></ImageWrapper>

      <RightWrapper>
        <NameWrapper>Bikram Ghimire</NameWrapper>
        <LatestMessageWrapper>I will call you later</LatestMessageWrapper>
      </RightWrapper>
    </UserCardContainer>
  );
};

export default UserCard;

const UserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  border: 1px solid #ddd;
`;
const ImageWrapper = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;
const RightWrapper = styled.div`
  margin-left: 10px;
`;
const NameWrapper = styled.h3`
  font-weight: 500;
  font-size: 16px;
`;
const LatestMessageWrapper = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-left: 10px;
`;
