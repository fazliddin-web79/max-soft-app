import React from "react";
import Navbar from "../Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import { sidebarLink } from "../Utils/sidebar";
import { sidebarLinkDown } from "../Utils/sidebar-down";
import { Navigate } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
const Router = () => {
  return (
    <Routes>
      <Route path="sign-up" element={<SignUp />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path={"/"} element={<Navigate to={"/overview"} />} />
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Layout />}>
          <Route
            path="/pages/overview"
            element={<Navigate to={"/overview"} />}
          />
          <Route
            path="/pages/messages"
            element={<Navigate to={"/messages"} />}
          />
          {sidebarLink.map((item) => {
            return (
              <Route key={item.id} path={item.path} element={item.element}>
                {item.options &&
                  item.options.map((value, index) => {
                    return (
                      <Route
                        key={index}
                        path={value.path}
                        element={value.element}
                      />
                    );
                  })}
              </Route>
            );
          })}
          {sidebarLinkDown.map((item) => {
            return (
              <Route key={item.id} path={item.path} element={item.element} />
            );
          })}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
