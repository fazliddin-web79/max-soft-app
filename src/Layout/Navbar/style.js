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
  border-bottom: 1px solid #e5e7eb;
  ${(props) =>
    props.darkMode
      ? `
  
  background-color: #1f2a37;
  img{
    background-color: white;
    padding: 5px;
    border-radius: 50%;
  }
  path{
    fill:white;
  }
  `
      : ""}
`;

Container.Left = styled.div`
  display: flex;
  align-items: center;
`;
Container.Right = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
`;

Container.Registr = styled.div`
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: white;
  letter-spacing: 2px;
  margin-left: 10px;
  border-radius: 8px;
  padding: 5px 7px;
  background-color: #0e9f6e;
  :hover {
    color: #0e9f6e;
    background-color: white;
    border: 2px solid #0e9f6e;
    transform: scale(0.98);
  }
`;
