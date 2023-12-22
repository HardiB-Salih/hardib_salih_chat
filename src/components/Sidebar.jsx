import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const SidebarWrapper = styled.div`
  flex: 1;
  background-color: #3e3c61;
  position: relative;
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Navbar />
      <Search />
      <Chats />
    </SidebarWrapper>
  );
};

export default Sidebar;
