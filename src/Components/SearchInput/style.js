import styled from "styled-components";

export const Container = styled.div`
  margin-left: 32px;
  padding: 13px 15px;
  width: 402px;
  height: 45px;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  flex: none;
  order: 1;
  flex-grow: 0;
  display: flex;
  align-items: center;
  :focus {
    border: 1px solid green;
  }
  img {
    width: 20px;
    height: 20px;
  }
  input {
    margin-left: 10px;
    border: none;
    outline: none;
    background: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #6b7280;
  }
`;
