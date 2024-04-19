import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../breakpoints";

const StyledHomepageContainer = styled.main`
  height: 100%;
  width: 100%;

  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 10rem;

  position: relative;

  @media ${device.lg} {
    justify-content: center;
  }

  @media ${device.md} {
    gap: 5rem;
  }

  @media ${device.sm} {
    justify-content: space-evenly;
    gap: 2rem;
  }

  @media ${device.sm} {
    justify-content: space-evenly;
    gap: 2rem;
  }

  @media ${device.xs} {
    justify-content: space-around;
    gap: 1rem;
  }
`;

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  text-align: center;
  margin-top: 8rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  @media ${device.lg} {
    font-size: 8rem;
  }

  @media ${device.md} {
    font-size: 6rem;
  }

  @media ${device.sm} {
    font-size: 4rem;
  }
`;

export const StyledLine = styled.div`
  height: 0.5rem;
  width: 4rem;

  background-color: #64748b;

  @media ${device.lg} {
    height: 1rem;
    width: 8rem;
  }

  @media ${device.md} {
    height: 0.5rem;
    width: 8rem;
  }

  @media ${device.sm} {
    height: 0.5rem;
    width: 4rem;
  }
`;

const StyledText = styled.p`
  font-size: 2.4rem;
  text-align: center;
  color: #71717a;
  padding: 0rem 2rem;

  @media ${device.lg} {
    font-size: 4rem;
  }

  @media ${device.md} {
    font-size: 3rem;
  }

  @media ${device.sm} {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  background-color: #fff;
  padding: 2rem 4rem;
  font-size: 1.6rem;
  border-radius: 10rem;
  font-weight: 500;
  border: 1px solid #4f46e5;
  color: #292524;
  text-decoration: none;

  @media ${device.lg} {
    font-size: 2.4rem;
    padding: 3rem 6rem;
  }

  @media ${device.md} {
    font-size: 2rem;
    padding: 2rem 4rem;
  }

  @media ${device.sm} {
    font-size: 1.6rem;
    padding: 2rem 4rem;
  }
`;

const StyledFooterText = styled.p`
  position: absolute;
  bottom: 0rem;
  font-size: 1.4rem;
  color: #71717a;
  a {
    font-weight: 600;
    color: #18181b;
    text-decoration: none;
  }

  @media ${device.lg} {
    position: static;
    font-size: 3rem;
  }
  @media ${device.md} {
    font-size: 2.5rem;
  }

  @media ${device.sm} {
    font-size: 1.4rem;
  }

  @media ${device.sm} {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
`;

function Homepage() {
  return (
    <StyledHomepageContainer>
      <StyledH1>
        Welcome to Quizzies
        <StyledLine />
      </StyledH1>
      <StyledText>
        Explore six diverse categories and various difficulty levels tailored to
        your expertise. Embark on a trivia adventure today! Built with
        TypeScript, React Router, Styled Components, and Redux, Quizzies offers
        a seamless and immersive experience for all trivia enthusiasts.
      </StyledText>
      <StyledLink to="/categories">Get Started</StyledLink>
      <StyledFooterText>
        Developed by <a href="https://github.com/Kitzvv">Michał Nowakowski</a>{" "}
        for learning purposes
      </StyledFooterText>
    </StyledHomepageContainer>
  );
}

export default Homepage;
