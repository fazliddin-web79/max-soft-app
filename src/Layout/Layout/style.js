import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  width: ${(props) =>
    props.open ? "calc(100% - 250px);" : "calc(100% - 60px);"};
  background: #e5e7eb;

  ${(props) =>
    props.darkMode
      ? `
  
  background-color: #88909d;

  path{
    fill:white;
  }
  `
      : ""}
`;
