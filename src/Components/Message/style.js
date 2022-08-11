import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  ${(props) => {
    return props.user
      ? `
    display: flex;
    justify-content: flex-end;
    `
      : "";
  }}
`;
Container.Wrapper = styled.div`
  border-radius: 15px 15px 15px 0px;
  background-color: #b8feff;

  ${(props) => {
    return props.user
      ? `
  border-radius: 15px 15px 0px 15px;
  background-color: #3780e4;
  color: white;
  `
      : "";
  }}
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  min-width: 300px;
  width: 50%;
  max-width: 700px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
`;

Container.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  min-width: 300px;
  margin-bottom: 0;
  margin-left: 15px;
  width: calc(100% - 30px);
`;
Container.Span = styled.span``;

Container.Wrap = styled.div`
  display: flex;
  align-items: center;
`;
