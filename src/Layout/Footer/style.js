import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  margin-top: 0px;
  padding: 48px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 16px;
  color: #6b7280;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

Container.Left = styled.div`
  display: flex;
`;
Container.Right = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
