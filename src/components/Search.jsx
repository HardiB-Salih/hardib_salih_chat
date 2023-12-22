import React from "react";
import styled from "styled-components";
import Avatar from "../img/avatar.jpg";

const SearchWrapper = styled.div`
  border-bottom: 1px solid gray;

  .searchForm {
    padding: 10px;

    input {
      background-color: transparent;
      border: none;
      color: white;
      outline: none;

      &::placeholder {
        color: lightgray;
      }
    }
  }

  .userChat {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #2f2d52;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }

    .userChatInfo {
      span {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        color: lightgray;
      }
    }
  }
`;

const Search = () => {
  return (
    <SearchWrapper>
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img src={Avatar} alt="" />
        <div className="userChatInfo">
          <span>HardiB.Salih</span>
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
