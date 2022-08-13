import React, { useState } from "react";
import Avatar from "../../Components/Avatar";
import Input from "../../Components/Input";
import { auth } from "../../firebase";
import { Container, Wrap, Error } from "./style";
import userImg from "../../Assets/img/avatar.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import ImgForUser from "../../Components/ImgForUser";
import { imgUsers } from "../../Mock/imgForUser";
import SaveBtn from "../../Components/SaveBtn";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserPage = () => {
  const darkMode = useSelector((store) => store.user.darkMode);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  //State for user displayName

  const onLoadPage = () => {
    window.location.reload();
  };
  const [name, setName] = useState("");
  const [disebledName, setDisebledName] = useState(true);

  //state for user profileImg
  const [photoURL, setPhotoURL] = useState(
    user ? auth.currentUser.photoURL : ""
  );
  const [disebledPhotoURL, setDisebledPhotoURL] = useState(true);

  // state for user Email
  const [email, setEmail] = useState("");
  const [disebledEmail, setDisebledEmail] = useState(true);

  // state for user paswords
  const [oldPassword, setOldPassword] = useState();
  const [disebledPassword, setDisebledPassword] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConf, setNewPasswordConf] = useState("");

  const onNameUpdate = () => {
    setDisebledName(false);
  };
  const onNameSave = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        alert("Name succesfully update");
        onLoadPage();
      })
      .catch((error) => {
        alert(error);
      });
    setDisebledName(true);
  };
  const onEmailUpdate = () => {
    setDisebledEmail(false);
  };
  const onEmailSave = () => {
    updateEmail(auth.currentUser, email)
      .then(() => {
        alert("Email succesfully update");
        onLoadPage();
      })
      .catch((error) => alert(error));
    setDisebledEmail(true);
  };
  const onPasswordUpdate = () => {
    setDisebledPassword(false);
  };
  const onPasswordSave = () => {
    console.log(oldPassword);
    if (newPassword === newPasswordConf) {
      updatePassword(auth.currentUser, newPassword)
        .then(() => {
          alert("Password Succesfully update");
          onLoadPage();
        })
        .catch((error) => console.log(error));
      setDisebledPassword(true);
    }
  };

  const onImgUpdate = () => {
    setDisebledPhotoURL(false);
  };

  const onSelectImg = (img) => {
    if (!disebledPhotoURL) setPhotoURL(img);
  };

  const onImgSave = () => {
    updateProfile(auth.currentUser, { photoURL: photoURL })
      .then(() => {
        alert("Img Succesfully update");
        onLoadPage();
      })
      .catch((error) => alert(error));
    setDisebledPhotoURL(true);
  };
  return (
    <div>
      {!user ? (
        <Error darkMode={darkMode}>
          <h1>
            Sorry, You are not registered, Please{" "}
            <span onClick={() => navigate("/sign-in")}>Sign In</span> to see all
            User Setting.
          </h1>
        </Error>
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
                  <li>Antd design</li>
                  <li>Google Firebase </li>
                  <li>Styled-components</li>
                  <ImgForUser
                    img={photoURL ? photoURL : auth.currentUser.photoURL}
                  />{" "}
                  <span>Current Your Avatar</span>{" "}
                  <button onClick={onImgUpdate}>Update</button>
                </Wrap.Title>
              </Wrap.TitleWrap>
              <Wrap.ImgWrap disebled={disebledPhotoURL}>
                {imgUsers.map((item) => {
                  return (
                    <ImgForUser
                      onClick={onSelectImg}
                      key={item.id}
                      img={item.url}
                    />
                  );
                })}
              </Wrap.ImgWrap>
              {!disebledPhotoURL && (
                <SaveBtn onClick={onImgSave} title={"Save Your Img"} />
              )}
            </Wrap>
          </Container.Left>
          <Container.Right>
            <Wrap>
              <Wrap.Title>
                <span>User Name</span>{" "}
                <button onClick={onNameUpdate}>Update</button>
              </Wrap.Title>
              <Input
                onChange={setName}
                placeholder={
                  disebledName ? "User name..." : auth.currentUser.displayName
                }
                disebled={disebledName}
              />
              {!disebledName && (
                <SaveBtn title={"Save Your Name"} onClick={onNameSave} />
              )}
              <hr />

              <Wrap.Title>
                <span>Email</span>{" "}
                <button onClick={onEmailUpdate}>Update</button>
              </Wrap.Title>
              <Input
                onChange={setEmail}
                placeholder={
                  disebledEmail ? "Email . . ." : auth.currentUser.email
                }
                disebled={disebledEmail}
              />
              {!disebledEmail && (
                <SaveBtn title={"Save Your Email"} onClick={onEmailSave} />
              )}
              <hr />
              <Wrap.Title>
                <span>Old password</span>{" "}
                <button onClick={onPasswordUpdate}>Update</button>
              </Wrap.Title>
              <Input
                onChange={setOldPassword}
                placeholder={"Old password"}
                type="password"
                disebled={disebledPassword}
              />
              <Wrap.Title>
                <span>New password</span>
              </Wrap.Title>
              <Input
                onChange={setNewPassword}
                placeholder={"New password"}
                type="password"
                disebled={disebledPassword}
              />
              <Wrap.Title>
                <span>Confirm password</span>
              </Wrap.Title>
              <Input
                onChange={setNewPasswordConf}
                placeholder={"Confirm password"}
                type="password"
                disebled={disebledPassword}
              />
              {!disebledPassword && (
                <SaveBtn
                  onClick={onPasswordSave}
                  title={"Save Your Password"}
                />
              )}
            </Wrap>
          </Container.Right>
        </Container>
      )}
    </div>
  );
};

export default UserPage;
