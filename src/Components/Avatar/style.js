import styled from "styled-components";

export const Container = styled.div`
  img {
    border-radius: 50%;
    width: ${(props) => (props.width ? props.width : "50px")};
  }
`;
