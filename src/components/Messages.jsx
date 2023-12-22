import React from "react";
import styled from "styled-components";
import Message from "../components/Message";

const MessagesWrapper = styled.div`
  background-color: #ddddf7;
  padding: 10px;
  height: calc(100% - 160px);
  overflow: scroll;
`;

const Messages = () => {
  return (
    <MessagesWrapper>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </MessagesWrapper>
  );
};

export default Messages;
