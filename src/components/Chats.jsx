import styled from "styled-components";
import Avatar from "../img/avatar.jpg";

const ChatsWrapper = styled.div`
  // Add your styles here
`;

const UserChat = styled.div`
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
    display: flex;
    flex-direction: column;
    gap: 0px !important;

    span {
      font-size: 18px;
      font-weight: 500;
    }

    p {
      font-size: 14px;
      color: lightgray;
    }
  }
`;

const Chats = () => {
  return (
    <ChatsWrapper>
      <UserChat>
        <img src={Avatar} alt="" />
        <div className="userChatInfo">
          <span>HardiB.Salih</span>
          <p>Hello</p>
        </div>
      </UserChat>
    </ChatsWrapper>
  );
};

export default Chats;
