import styled from "styled-components";

export const Container = styled.div`
  input {
    outline: none;
    padding: 5px 10px;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    width: 100%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #6b7280;
    :focus {
      border: 1px solid #1c64f2;
      color: #1c64f2;
    }
  }
`;
