import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;

  cursor: pointer;
`;

const StyledH1 = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledButton>goback</StyledButton>
      <StyledH1>Quizzies</StyledH1>
      <StyledButton>goforward</StyledButton>
    </StyledHeader>
  );
}

export default Header;
