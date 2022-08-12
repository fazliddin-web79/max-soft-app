import React from "react";
import Avatar from "../../Components/Avatar";
import Input from "../../Components/Input";
import { auth } from "../../firebase";
import { Container, Wrap, Error } from "./style";
import userImg from "../../Assets/img/avatar.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import ImgForUser from "../../Components/ImgForUser";
import { imgUsers } from "../../Mock/imgForUser";
import SaveBtn from "../../Components/SaveBtn";

const UserPage = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {!user ? (
        <Error></Error>
      ) : (
        <Container>
          <Container.Left>
            <Wrap>
              <Wrap.User>
                <Avatar
                  img={
                    auth.currentUser.photoURL
                      ? auth.currentUser.photoURL
                      : userImg
                  }
                  width={"50px"}
                />
                <div>
                  <h2>
                    {auth.currentUser.displayName
                      ? auth.currentUser.displayName
                      : "Avatar"}
                  </h2>
                  <h3>{auth.currentUser.email}</h3>
                </div>
              </Wrap.User>
            </Wrap>
            <Wrap>
              <Wrap.TitleWrap>
                <Wrap.Title>
                  <ImgForUser
                    img={
                      auth.currentUser.photoURL
                        ? auth.currentUser.photoURL
                        : userImg
                    }
                  />{" "}
                  <span>Current Your Avatar</span> <button>Update</button>
                </Wrap.Title>
              </Wrap.TitleWrap>
              <Wrap.ImgWrap disebled={true}>
                {imgUsers.map((item) => {
                  return <ImgForUser key={item.id} img={item.url} />;
                })}
              </Wrap.ImgWrap>
              <SaveBtn title={"Save Your Img"} />
            </Wrap>
          </Container.Left>
          <Container.Right>
            <Wrap>
              <Wrap.Title>
                <span>User Name</span> <button>Update</button>
              </Wrap.Title>
              <Input placeholder={"User name..."} disebled={true} />
              <SaveBtn title={"Save Your Name"} />
              <hr />

              <Wrap.Title>
                <span>Email</span> <button>Update</button>
              </Wrap.Title>
              <Input placeholder={"Email . . ."} disebled={true} />
              <SaveBtn title={"Save Your Email"} />
              <hr />
              <Wrap.Title>
                <span>Old password</span> <button>Update</button>
              </Wrap.Title>
              <Input
                placeholder={"Old password"}
                type="password"
                disebled={true}
              />
              <Wrap.Title>
                <span>New password</span>
              </Wrap.Title>
              <Input
                placeholder={"New password"}
                type="password"
                disebled={true}
              />
              <Wrap.Title>
                <span>Confirm password</span>
              </Wrap.Title>
              <Input
                placeholder={"Confirm password"}
                type="password"
                disebled={true}
              />
              <SaveBtn title={"Save Your Password"} />
            </Wrap>
          </Container.Right>
        </Container>
      )}
    </div>
  );
};

export default UserPage;
