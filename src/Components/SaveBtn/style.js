import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 15px;
  color: #03543f;
  width: fit-content;
  background: #def7ec;
  border-radius: 12px;
  font-weight: 600;
  user-select: none;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;
