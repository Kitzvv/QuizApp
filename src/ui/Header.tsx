import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
`;

const StyledH1 = styled.h1`
  font-size: 3.2rem;
  font-weight: 300;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledH1>Quizzies</StyledH1>
    </StyledHeader>
  );
}

export default Header;
