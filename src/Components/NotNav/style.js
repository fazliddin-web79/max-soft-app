import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

Left.Wrap = styled.div`
  margin-left: 25px;
`;
export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #6b7280;
    user-select: none;
    cursor: pointer;
  }
`;

export const Link = styled(NavLink)`
  margin-right: 16px;
  color: #6b7280;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  :first-child {
    color: #0e9f6e;
    font-weight: 700;
  }
  :hover {
    font-weight: 700;
    color: #0e9f6e;
  }
`;
