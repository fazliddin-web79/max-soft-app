import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  height: 200px;
  width: calc(100% -20px);
  margin: 16px;
  margin-right: 20px;
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "White")};
  border-radius: 16px;
  padding: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: ${(props) => (props.darkMode ? `white` : "")};
  span {
    color: #0e9f6e;
  }
`;
