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
const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e6e9e6;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  /* ${getType}  */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;

const Icon = styled.div`
  position: absolute;
  left: 10px;
`;

export { Container, Wrapper, Icon };
