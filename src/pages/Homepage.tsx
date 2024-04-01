import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const StyledMain = styled.main`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  gap: 10rem;
`;

const StyledText = styled.p`
  font-size: 2.4rem;
  text-align: center;
  color: #71717a;
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

  &:hover {
    background-color: #eef2ff;
    transition: all 0.5s;
  }
`;

const StyledLine = styled.div`
  height: 0.5rem;
  width: 4rem;

  background-color: #64748b;
`;

function Homepage() {
  return (
    <StyledMain>
      <StyledH1>
        Welcome to Quizzies
        <StyledLine />
      </StyledH1>
      <StyledText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea
        sunt dolorum aspernatur, ad in culpa placeat sed fugit nam. Aliquid illo
        consectetur magni aliquam dolores. Architecto aut in repudiandae!
      </StyledText>
      <StyledLink to="/categories">Get Started</StyledLink>
    </StyledMain>
  );
}

export default Homepage;
