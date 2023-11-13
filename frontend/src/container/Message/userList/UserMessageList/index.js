import React from "react";
import styled from "styled-components";
import UserForm from "../../UserForm";

const UserMessageList = () => {
  return (
    <UserMessageListContainer>
      <LeftMessage>
        <div className="msger-chat">
          {[1, 2].map((item, index) => {
            return (
              <div key={index}>
                <div className="msg left-msg">
                  <div
                    class="msg-img"
                    style={{
                      backgroundImage: `url(https://image.flaticon.com/icons/svg/327/327779.svg)`,
                    }}
                  ></div>

                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">BOT</div>
                      <div className="msg-time">12:45</div>
                    </div>
                    <div className="msg-text">
                      Hi, welcome to SimpleChat! Go ahead and send a message.
                    </div>
                  </div>
                </div>

                <div class="msg right-msg">
                  <div
                    class="msg-img"
                    style={{
                      backgroundImage: `url(https://image.flaticon.com/icons/svg/145/145867.svg)`,
                    }}
                  ></div>

                  <div class="msg-bubble">
                    <div class="msg-info">
                      <div class="msg-info-name">Sajad</div>
                      <div class="msg-info-time">12:46</div>
                    </div>

                    <div class="msg-text">
                      You can change your name in JS section!
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </LeftMessage>
      <UserForm />
    </UserMessageListContainer>
  );
};

export default UserMessageList;

const UserMessageListContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
`;

const LeftMessage = styled.div`
  .msger-chat {
    flex: 1;
    overflow-y: auto;
    padding: 10px;
  }
  .msg {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .msg-bubble {
    max-width: 450px;
    padding: 15px;
    border-radius: 15px;
    background: #ececec;
  }
  .msg-img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    background: #ddd;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;
  }
  .msg-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .msg-info-name {
    margin-right: 10px;
    font-weight: bold;
  }
  .msg-info-time {
    font-size: 0.85em;
  }
  .right-msg {
    flex-direction: row-reverse;
  }
  .right-msg .msg-bubble {
    background: #579ffb;
    color: #fff;
    border-bottom-right-radius: 0;
  }
  .right-msg .msg-img {
    margin: 0 0 0 10px;
  }
`;
const RightMessage = styled.div``;
