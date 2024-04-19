import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.p`
  color: #71717a;
  font-size: 3rem;
  font-weight: 400;

  margin-bottom: 2rem;
  margin-top: 2rem;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick() {
    if (location.pathname.includes("quiz") || location.pathname === "/finish") {
      return;
    } else {
      navigate("/");
    }
  }

  return (
    <StyledHeader>
      <StyledText onClick={() => handleClick()}>Quizzies</StyledText>
    </StyledHeader>
  );
}

export default Header;
