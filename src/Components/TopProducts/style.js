import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  margin-top: 0px;
  margin-left: 0px;
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  min-width: calc(100% - 398px);
  width: calc(100% - 398px);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    width: calc(100% - 32px);
    margin: 16px;
    margin-top: 0;
  }
`;

Container.Wrap = styled.div``;

Container.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  color: #111827;
`;
