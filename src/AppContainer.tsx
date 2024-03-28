import styled from "styled-components";

const StyledAppContainer = styled.div`
  background-color: #f5f5f5;
  height: 65rem;
  width: 95rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 50;
`;

const StyledH1 = styled.h1`
  font-size: 3.2rem;
  text-align: center;
  margin-top: 8rem;
  font-weight: 400;
`;

function AppContainer() {
  return (
    <StyledAppContainer>
      <StyledH1>Welcome To Quizzies</StyledH1>
    </StyledAppContainer>
  );
}

export default AppContainer;
