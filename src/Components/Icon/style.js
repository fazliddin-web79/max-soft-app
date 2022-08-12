import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  :hover {
    path {
      fill: #03543f;
    }
  }
  svg {
    width: ${(props) => (props.width ? props.width : "24px")};
    height: ${(props) => (props.width ? props.width : "24px")};
  }
`;
