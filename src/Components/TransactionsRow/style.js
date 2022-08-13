import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 800px;
  width: 100%;
  height: 54px;
  background-color: ${(props) => (props.index % 2 ? "" : "#F9FAFB")};
  padding-left: 5px;
`;

Container.Name = styled.div`
  width: 30%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #111827;
`;
Container.Date = styled.div`
  width: 25%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b7280;
`;
Container.Amount = styled.div`
  width: 25%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;

  color: #111827;
`;
Container.Status = styled.div`
  width: 20%;
  h1 {
    margin: 0;
    width: 90px;
    padding: 2px 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    border-radius: 10px;
    background: ${(props) =>
      props.status === "completed"
        ? "#DEF7EC"
        : props.status === "progres"
        ? "#E1EFFE"
        : "#FBD5D5"};
    color: ${(props) =>
      props.status === "completed"
        ? "#03543F"
        : props.status === "progres"
        ? "#1E429F"
        : "#9B1C1C"};
  }
`;
