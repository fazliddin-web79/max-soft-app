import styled from "styled-components";

export const Container = styled.div`
  svg {
    width: ${(props) => (props.width ? props.width : "24px")};
    height: ${(props) => (props.width ? props.width : "24px")};
  }
`;
