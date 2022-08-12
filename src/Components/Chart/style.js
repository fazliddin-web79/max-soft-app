import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "white")};
  width: calc(100% - 32px);
  padding: 20px;
  margin: 16px;
  border-radius: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;
