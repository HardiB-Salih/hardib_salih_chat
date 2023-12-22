import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { tablet } from "../style/MediaQuery";

const HomeWrapper = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  width: 65%;
  height: 80%;
  display: flex;
  overflow: hidden;

  ${tablet(`
     width: 90%;
  `)};
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <Sidebar />
        <Chat />
      </Container>
    </HomeWrapper>
  );
};

export default Home;
