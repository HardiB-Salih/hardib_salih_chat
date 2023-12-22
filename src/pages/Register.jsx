import React from "react";
import Add from "../img/addAvatar.png";
import styled from "styled-components";

const Register = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <Logo>HB Chat</Logo>
        <Title>Register</Title>
        <Form>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </Form>
        <P>You do have an account? Login</P>
      </FormWrapper>
    </FormContainer>
  );
};

export default Register;

const FormContainer = styled.div`
  background-color: #a7bcff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 20px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const Logo = styled.span`
  color: #5d5b8d;
  font-weight: bold;
  font-size: 24px;
`;

const Title = styled.span`
  color: #5d5b8d;
  font-size: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    padding: 15px;
    border: none;
    width: 250px;
    border-bottom: 1px solid #a7bcff;

    &:focus {
      border-bottom: 2px solid #a7bcff;
      outline: none; /* Add this line to remove the focus outline */
    }
    &::placeholder {
      color: rgb(175, 175, 175);
    }
  }

  button {
    background-color: #7b96ec;
    color: white;
    padding: 10px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #8da4f1;
    font-size: 12px;
    cursor: pointer;

    img {
      width: 32px;
    }
  }
`;

const P = styled.p`
  color: #5d5b8d;
  font-size: 12px;
  margin-top: 10px;
`;
