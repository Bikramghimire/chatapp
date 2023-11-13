import React from "react";
import styled from "styled-components";

const UserForm = () => {
  return (
    <UserFormContainer>
      <form className="msger-inputarea">
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </UserFormContainer>
  );
};

export default UserForm;

const UserFormContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 75%;
  .msger-chat::-webkit-scrollbar {
    width: 6px;
  }
  .msger-chat::-webkit-scrollbar-track {
    background: #ddd;
  }
  .msger-chat::-webkit-scrollbar-thumb {
    background: #bdbdbd;
  }
  .msger-inputarea {
    display: flex;
    padding: 10px;
    border-top: 2px solid #ddd;
    background: #eee;
  }
  .msger-inputarea * {
    padding: 10px;
    border: none;
    border-radius: 3px;
    font-size: 1em;
  }
  .msger-input {
    flex: 1;
    background: #ddd;
  }
  .msger-send-btn {
    margin-left: 10px;
    background: rgb(0, 196, 65);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.23s;
  }
  .msger-send-btn:hover {
    background: rgb(0, 180, 50);
  }
`;
