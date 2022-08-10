import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

  width: 100%;
  height: 70px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

Container.Left = styled.div`
  display: flex;
  align-items: center;
`;
Container.Right = styled.div`
  display: flex;
  align-items: center;
  width: 75px;
  justify-content: space-between;
`;
