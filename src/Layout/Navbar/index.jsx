import React from "react";
import Icon from "../../Components/Icon";
import Logo from "../../Components/Logo";
import SearchInput from "../../Components/SearchInput";
import { Container } from "./style";
import { ReactComponent as bell } from "../../Assets/icon/bell.svg";
import avatar from "../../Assets/img/avatar.jpg";
import Avatar from "../../Components/Avatar";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { ReactComponent as menu } from "../../Assets/icon/menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActive } from "../../Redux/sidebar";
import DarkMode from "../../Components/DarkMode";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    await signOut(auth);
  };
  const darkMode = useSelector((store) => store.user.darkMode);
  return (
    <>
      <Container darkMode={darkMode}>
        <Container.Left>
          <Logo />
          <span onClick={() => dispatch(sidebarActive())}>
            <Icon Img={menu} width={"32px"} />
          </span>
          <SearchInput />
        </Container.Left>
        <Container.Right>
          <Icon Img={bell} width={"32px"} />
          <DarkMode />
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
