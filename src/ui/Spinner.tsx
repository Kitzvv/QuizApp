import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #18181b;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return <StyledSpinner></StyledSpinner>;
}

export default Spinner;
