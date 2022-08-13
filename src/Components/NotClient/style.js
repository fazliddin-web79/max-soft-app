import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e5e5e5;
  img {
    position: relative;
    height: 450px;
    top: -35px;
  }
  @media (max-width: 576px) {
    width: 70%;
    margin: 0 auto;
    img {
      height: 250px;
    }
    h1 {
      font-size: 32px;
    }
  }
`;

Container.Title = styled.h1`
  margin: 0;
  margin-top: -65px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #111827;
`;
Container.Info = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #6b7280;
`;
Container.Btn = styled.div`
  padding: 9px 17px;

  width: 131px;
  height: 39px;
  background: #0e9f6e;
  border-radius: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: white;
  cursor: pointer;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
`;
