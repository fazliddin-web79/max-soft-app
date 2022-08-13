import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100%;
  padding: 16px;
`;

export const Wrap = styled.div`
  position: relative;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: calc(100vh - 180px);
`;

export const Send = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  position: sticky;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  height: 80px;
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

  @media (max-width: 576px) {
    width: 100%;
    margin: 0px;
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
