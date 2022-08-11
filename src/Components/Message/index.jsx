import React from "react";
import { auth } from "../../firebase";
import { Container } from "./style";
import avatar from "../../Assets/img/avatar.jpg";
import Avatar from "../Avatar";

const Message = ({ data }) => {
  const userDone = auth.currentUser.uid === data.userId ? true : false;

  return (
    <Container user={userDone}>
      <Container.Wrapper user={userDone}>
        <Container.Wrap>
          <Avatar
            img={data.userImg !== null ? data.userImg : avatar}
            width={"35px"}
          />
          <Container.Title>{data.name.split(" ")[0]}</Container.Title>
        </Container.Wrap>
        <Container.Span>{data.message ? data.message : <br />}</Container.Span>
      </Container.Wrapper>
    </Container>
  );
};

export default Message;
