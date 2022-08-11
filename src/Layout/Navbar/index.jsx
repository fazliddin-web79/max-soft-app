import React from "react";
import Icon from "../../Components/Icon";
import Logo from "../../Components/Logo";
import SearchInput from "../../Components/SearchInput";
import { Container } from "./style";
import { ReactComponent as bell } from "../../Assets/icon/bell.svg";
import avatar from "../../Assets/img/avatar.jpg";
import Avatar from "../../Components/Avatar";
import { Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <>
      <Container>
        <Container.Left>
          <Logo />
          <SearchInput />
        </Container.Left>
        <Container.Right>
          <Icon Img={bell} width={"32px"} />
          {user ? (
            <div className="user-navbar">
              <Avatar
                img={
                  auth.currentUser.photoURL !== null
                    ? auth.currentUser.photoURL
                    : avatar
                }
                width={"40px"}
              />
              <Container.Registr onClick={logout}>Logout</Container.Registr>
            </div>
          ) : (
            <Container.Registr onClick={() => navigate("sign-in")}>
              Login
            </Container.Registr>
          )}
        </Container.Right>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
