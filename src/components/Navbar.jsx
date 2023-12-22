import React from "react";
import styled from "styled-components";
import Avatar from "../img/avatar.jpg";
import { tablet } from "../style/MediaQuery";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #2f2d52;
  height: 50px;
  padding: 10px;
  justify-content: space-between;
  color: #ddddf7;
`;
const Logo = styled.span`
  font-weight: bold;

  ${tablet(`
     display: none;
  `)}
`;

const User = styled.div`
  display: flex;
  gap: 10px;

  img {
    background-color: #ddddf7;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  background-color: #5d5b8d;
  color: #ddddf7;
  font-size: 10px;
  padding: 5px 10px;
  border-radius: 2px;
  border: none;
  cursor: pointer;

  ${tablet(`
    position: absolute;
    bottom: 10px;
  `)};
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Logo>HB Chat</Logo>
      <User>
        <img src={Avatar} alt="" />
        <span>HardiB.Salih</span>
      </User>
      <Button>logout</Button>
    </NavbarWrapper>
  );
};

export default Navbar;
