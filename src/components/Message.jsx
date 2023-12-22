import React from "react";
import styled from "styled-components";

const MessageWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  .messageInfo {
    display: flex;
    flex-direction: column;
    color: gray;
    font-weight: 300;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .messageContent {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      background-color: white;
      padding: 10px 20px;
      border-radius: 0px 10px 10px 10px;
      max-width: max-content;
    }

    img {
      width: 50%;
    }
  }

  &.owner {
    flex-direction: row-reverse;

    .messageContent {
      align-items: flex-end;
      p {
        background-color: #8da4f1;
        color: white;
        border-radius: 10px 0px 10px 10px;
      }
    }
  }
`;

const Message = () => {
  return (
    <MessageWrapper className="owner">
      <div className="messageInfo">
        <img
          src="https://images.unsplash.com/photo-1703192163894-dbc99acc00d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.unsplash.com/photo-1703192163894-dbc99acc00d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </MessageWrapper>
  );
};

export default Message;
