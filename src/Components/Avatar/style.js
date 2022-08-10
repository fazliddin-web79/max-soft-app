import styled from "styled-components";

export const Container = styled.div`
  img {
    width: ${(props) => (props.width ? props.width : "50px")};
  }
`;
