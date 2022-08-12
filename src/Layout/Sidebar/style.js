import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 70px;
  left: 0;
  z-index: 998;
  height: calc(100vh - 70px);
  width: ${(props) => (props.open ? "250px" : "60px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  hr {
    width: 100%;
    border: 0.5px solid #e5e7eb;
    outline: none;
  }

  border-right: 1px solid #e5e7eb;
  ${(props) =>
    props.darkMode
      ? `
  
  background-color: #1f2a37;
  
  path{
    fill:white;
  }
  `
      : ""}
`;

Container.Wrap = styled.div`
  overflow: auto;
  width: 100%;
  max-height: calc(100vh - 70px);
  min-height: calc(100vh - 110px);
`;

Container.Footer = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  margin: 0 auto;
  width: 160px;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  ${(props) => (props.open ? "" : "display:none;")}
`;
