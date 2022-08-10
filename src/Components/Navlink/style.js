import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  transition: all 0.3s ease;
  :hover {
    h1 {
      color: #0e9f6e;
    }
    path {
      fill: #0e9f6e;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 15px;
  width: 225px;
  margin: 10px auto;
  background: ${(props) => (props.data == "true" ? "none" : "#F3F4F6")};
  border-radius: ${(props) => (props.data == "true" ? "none" : "12px")};
`;
Container.Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
`;

Container.Title = styled.h1`
  margin: 0;
  margin-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
`;

Container.Btn = styled.div`
  user-select: none;
  cursor: pointer;
  transition: all 0.5ms ease;
`;

export const Options = styled.div`
  margin-left: 60px;
  margin-bottom: 15px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    color: #0e9f6e;
  }
`;

Wrap.Option = styled.div`
  transform-origin: top;
  animation: example 0.2s ease;
  @keyframes example {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;
