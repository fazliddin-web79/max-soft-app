import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
`;
Container.Left = styled.div`
  width: calc(50% - 8px);
`;
Container.Right = styled.div`
  width: calc(50% - 8px);
`;

export const Wrap = styled.div`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  hr {
    margin: 15px 0px;
    border: 1px solid #e1effe;
  }
`;
export const Error = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 16px;
  height: 250px;
  padding: 15px 20px;
  span {
    color: #0e9f6e;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "white")};
  h1 {
    color: ${(props) => (props.darkMode ? `white` : "#111827")};
  }
`;

Wrap.User = styled.div`
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 15px;
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #111827;
      margin-bottom: 0;
    }
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: #111827;
      margin-bottom: 0;
    }
  }
`;

Wrap.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  margin-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    outline: none;
    border: 1px solid #1c64f2;
    background-color: #e1effe;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #111827;
    border-radius: 12px;
    padding: 5px 15px;
    cursor: pointer;
    user-select: none;
    :active {
      transform: scale(0.98);
    }
  }
`;

Wrap.ImgWrap = styled.div`
  ${(props) => {
    return props.disebled
      ? "background-color: #F3F4F6;"
      : "background: #DEF7EC;";
  }}
  margin: 15px auto;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
`;
Wrap.TitleWrap = styled.div`
  padding: 15px 0px;
  border-bottom: 2px solid #e1effe;
`;
