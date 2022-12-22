import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffff",
        color: "white",
      };
    case "light":
      return {
        background: "#ffff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "white",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "white",
      };
  }
};
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};

  cursor: pointer;
  ${getType} :active {
    opacity: 0.7;
  }
`;
export { Container };
