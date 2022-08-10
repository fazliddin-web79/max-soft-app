import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  padding: 10px 0;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
Left.Wrap = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
Left.Name = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  margin: 0;
`;
Left.Email = styled.h1`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #6b7280;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Right.Price = styled.h1`
  margin: 0;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #111827;
`;
