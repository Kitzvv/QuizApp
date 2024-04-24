import styled from "styled-components";
import { StyledLine } from "./Homepage";
import { useNavigate } from "react-router-dom";
import { device } from "../breakpoints";

const StyledPageNotFoundContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.lgPhones} {
    justify-content: start;
  }
  @media ${device.md} {
    justify-content: start;
  }
`;

const StyledH1 = styled.h1`
  color: #71717a;
  text-align: center;
  font-size: 4rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${device.md} and (orientation: landscape) {
    font-size: 3rem;
  }
`;

const StyledErrorText = styled.p`
  font-size: 2.4rem;
  text-align: center;
  color: #71717a;

  @media ${device.md} and (orientation: landscape) {
    font-size: 2rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  background-color: #f87171;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFoundContainer>
      <StyledH1>
        404 - Page Not Found
        <StyledLine />
      </StyledH1>
      <StyledErrorText>
        We're sorry, but the page you were looking for could not be found. It
        might have been removed, had its name changed, or is temporarily
        unavailable
      </StyledErrorText>
      <StyledButton onClick={() => navigate("/")}>Go to Homepage</StyledButton>
    </StyledPageNotFoundContainer>
  );
}

export default PageNotFound;
