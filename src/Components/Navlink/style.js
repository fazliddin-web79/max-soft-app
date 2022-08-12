import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  transition: all 0.3s ease;
  ${(props) => {
    return props.data
      ? `
    h1 {
      color: #0e9f6e;
    }
    path {
      fill: #0e9f6e;
    }
    `
      : "";
  }}
  :hover {
    h1 {
      color: #0e9f6e;
    }
    path {
      fill: #0e9f6e;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 15px;
  width: 225px;
  margin: 10px auto;
  :hover {
    ${(props) => {
      return !props.open
        ? `
    h1{
      display: block;
      position: absolute;
      left: 45px;
      z-index: 998;
      padding: 10px 15px;
      background-color: white;
      border:1px solid #0e9f6e;
      border-radius: 0px 12px 12px 12px;
    }
    `
        : "";
    }}
  }
  background: ${(props) =>
    props.data === "true" ? "none" : props.open ? "#F3F4F6" : "white"};
  border-radius: ${(props) =>
    props.data === "true" ? "none" : props.open ? "12px" : ""};

  ${(props) => {
    return !props.open
      ? `
    h1{
      display: none;
    }
    `
      : "";
  }}

  ${(props) =>
    props.open
      ? ""
      : props.active
      ? `
    border-left: 3px solid #0e9f6e;
    `
      : ""}
`;
Container.Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
`;

Container.Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
`;

Container.Btn = styled.div`
  user-select: none;
  cursor: pointer;
  transition: all 0.5ms ease;
`;

export const Options = styled.div`
  margin-left: 60px;
  margin-bottom: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    color: #0e9f6e;
  }
`;

Wrap.Option = styled.div`
  transform-origin: top;
  animation: example 0.2s ease;
  @keyframes example {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;
