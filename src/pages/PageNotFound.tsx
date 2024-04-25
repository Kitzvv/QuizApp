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
    gap: 0rem;
    justify-content: start;
  }

  @media ${device.md} {
    gap: 10rem;
    justify-content: center;
  }

  @media ${device.md} and (orientation: landscape) {
    gap: 0rem;
    justify-content: start;
  }

  @media ${device.sm} {
    gap: 5rem;
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

  @media ${device.lgPhones} {
    gap: 1rem;
    font-size: 3rem;
  }

  @media ${device.md} {
    font-size: 5rem;
  }

  @media ${device.md} and (orientation: landscape) {
    gap: 1rem;
    font-size: 3rem;
  }
  @media ${device.sm} {
    padding: 2rem;
    font-size: 3rem;
  }
  @media ${device.xs} {
    padding: 1rem;
  }
`;

const StyledErrorText = styled.p`
  font-size: 2.4rem;
  text-align: center;
  color: #71717a;

  @media ${device.lgPhones} {
    padding: 2rem;
    font-size: 1.8rem;
  }

  @media ${device.md} {
    padding: 4rem;
    font-size: 3rem;
  }

  @media ${device.md} and (orientation: landscape) {
    padding: 2rem;
    font-size: 1.8rem;
  }

  @media ${device.sm} {
    padding: 1rem;
    font-size: 2rem;
  }
  @media ${device.xs} {
    padding: 2rem;
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

  @media ${device.md} {
    padding: 2rem 4rem;
    font-size: 2rem;
  }
  @media ${device.md} and (orientation: landscape) {
    padding: 0.7rem 1.2rem;
    font-size: 2rem;
  }

  @media ${device.sm} {
    padding: 2rem;
    font-size: 2rem;
  }
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
