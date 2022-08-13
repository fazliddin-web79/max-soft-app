import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  margin-top: 16px;
  padding: 48px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "white")};

  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    margin-top: 15px;
    color: ${(props) => (props.darkMode ? `white` : "#111827")};
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    color: green;
  }
  hr {
    width: 100%;
    border: 1px solid #6b7280;
    margin-top: 10px;
  }
  ol {
    li {
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      color: green;
    }
  }
`;
