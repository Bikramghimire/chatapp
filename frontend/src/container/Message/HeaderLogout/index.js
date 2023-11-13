import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const HeaderLogOut = () => {
  const { logout, userData } = useAuth();
  const [openPopOver, setOpenPopOver] = useState(false);
  const popOverRef = useRef(null);
  console.log("the userdata", userData);

  const getInitials = (username) => {
    const words = username?.split(" ");
    const initials = words
      ?.map((word) => word.charAt(0).toUpperCase())
      .join("");
    return initials;
  };

  const handleClickOutside = (event) => {
    if (popOverRef.current && !popOverRef.current.contains(event.target)) {
      setOpenPopOver(false);
    }
  };

  const handleLogOut = () => {
    logout();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <LogOutWrapper>
      <PopOverWrapper ref={popOverRef} openPopOver={openPopOver}>
        <UserNameText>{userData?.username}</UserNameText>
        <LogOutLink onClick={handleLogOut}>Log Out</LogOutLink>
      </PopOverWrapper>
      <ProfileWrapper onClick={() => setOpenPopOver(!openPopOver)}>
        {getInitials(userData?.username)}
      </ProfileWrapper>
    </LogOutWrapper>
  );
};

export default HeaderLogOut;
const LogOutWrapper = styled.div`
  position: relative;
`;

const ProfileWrapper = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;
const PopOverWrapper = styled.div`
  width: 160px;
  height: 160px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  visibility: ${(props) => (props.openPopOver ? "visible" : "hidden")};
  opacity: ${(props) => (props.openPopOver ? 1 : 0)};
  transition: visibility 0s, opacity 0.5s;
  position: absolute;
  top: 55px;
  right: 20px;
  background-color: white;
  padding: 10px;
`;

const UserNameText = styled.p`
  text-transform: uppercase;
  font-size: 16px;
`;
const LogOutLink = styled(Link)`
  text-decoration: none;
`;
