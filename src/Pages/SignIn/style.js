import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  img {
    width: 600px;
  }
  @media (max-width: 576px) {
    display: none;
  }
`;
export const Right = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin: 0 auto;
  color: #0e9f6e;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 450px;
  height: 550px;
  padding: 25px;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  @media (max-width: 576px) {
    width: calc(100% - 32px);
  }
`;

Right.Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #111827;
  margin-bottom: 0;
  margin-left: 15px;
`;
Right.Wrap = styled.div`
  height: 120px;
  width: 380px;
  padding: 5px 5px;
`;
Right.Btn = styled.div`
  margin: 10px auto;
  width: 240px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e9f6e;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  color: White;
  user-select: none;
  :active {
    transform: scale(0.98);
  }
  img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
  }
`;
Right.Input = styled.input`
  padding: 8px 15px;
  width: 100%;
  margin-top: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  outline: none;
  :focus {
    border: 1px solid #0e9f6e;
  }
`;

Right.Link = styled.p`
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #111827;
`;
Right.Message = styled.p`
  margin-left: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: red;
  margin-bottom: 0;
`;
Right.Span = styled.span`
  cursor: pointer;
  color: #0e9f6e;
  font-weight: 700;
  text-decoration: underline;
`;
