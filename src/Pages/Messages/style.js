import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px;
`;

export const Wrap = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  margin-bottom: 75px;
`;

export const Send = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: ${(props) =>
    props.open ? "calc(100% - 282px);" : "calc(100% - 92px);"};
  position: fixed;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  textarea {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    border: none;
    outline: none;
    width: calc(100% - 120px);
  }
  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    padding: 5px 10px;
    font-family: "Inter";
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
    background: #0e9f6e;
    border-radius: 12px;
    transition: all 0.5s ease;
    border: 1px solid #0e9f6e;
    cursor: pointer;
    :active {
      transform: scale(0.98);
    }
    :hover {
      color: green;
      background-color: #ffffff;
      & path {
        fill: green;
      }
    }
  }
`;

export const NotUser = styled.div`
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "white")};

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 16px;
  min-height: 250px;
  padding: 15px 20px;

  h1 {
    color: ${(props) => (props.darkMode ? `white` : "#111827")};
  }
  span {
    color: #0e9f6e;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
