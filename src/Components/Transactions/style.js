import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  margin-top: 0px;
  margin-left: 16px;
  padding: 24px;
  background-color: ${(props) => (props.darkMode ? `#1f2a37` : "white")};
  border-radius: 16px;
  min-width: calc(100% - 398px);
  width: calc(100% - 32px);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    width: calc(100% - 32px);
    margin: 16px;
    margin-top: 0;
  }
`;

Container.Wrap = styled.div`
  margin-top: 15px;
  width: 100%;
  overflow: scroll;
  position: relative;
`;

Container.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  color: ${(props) => (props.darkMode ? `white` : "#111827")};
`;
Container.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: #f9fafb;
  border-radius: 12px 12px 0px 0px;
  padding-left: 5px;
  border-radius: 1px solid #e5e7eb;
  width: 100%;
  min-width: 800px;
  div {
    width: 25%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #6b7280;
  }
  div:first-child {
    width: 30%;
  }
  div:last-child {
    width: 20%;
  }
`;

Container.Info = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #71717a;
  margin: 0;
`;
