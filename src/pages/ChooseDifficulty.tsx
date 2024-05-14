import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledLine } from "./Homepage";
import { device } from "../breakpoints";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.lgPhones} {
    gap: 0rem;
    justify-content: start;
  }

  @media ${device.md} {
    gap: 10rem;
    justify-content: start;
  }
  @media ${device.md} and (orientation: landscape) {
    gap: 0;
  }

  @media ${device.sm} {
    /* background-color: red; */
    gap: 2rem;
  }
  @media ${device.xs} {
    gap: 0rem;
  }
`;

const StyledTextContainer = styled.div`
  height: 15rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;

  @media ${device.lgPhones} {
    height: 10rem;
    padding-top: 1rem;
    gap: 0.5rem;
    justify-content: start;
  }

  @media ${device.xs} {
    height: 10rem;
    padding-top: 1rem;
  }
`;

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  text-align: center;

  font-weight: 600;
  margin: 0;

  @media ${device.lgPhones} {
    font-size: 2rem;
  }

  @media ${device.sm} {
    font-size: 3rem;
  }

  @media ${device.xs} {
    font-size: 2.5rem;
  }
`;

const StyledCategoryName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #71717a;
  text-transform: uppercase;
  margin: 0;

  @media ${device.lgPhones} {
    font-size: 1.5rem;
  }

  @media ${device.sm} {
    font-size: 2rem;
  }
  @media ${device.xs} {
    font-size: 1.7rem;
  }
`;

const LevelContainer = styled.div`
  height: 50rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5rem;

  @media ${device.lgPhones} {
    height: 15rem;
  }

  @media ${device.lg} and (orientation: portrait) {
    align-items: start;
    gap: 2rem;
  }

  @media ${device.md} {
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  @media ${device.md} and (orientation: landscape) {
  }

  @media ${device.sm} {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
  @media ${device.sm} {
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;
  }
  @media ${device.xs} {
    height: 40rem;
    padding: 0rem;
    gap: 1rem;
  }
`;

const Level = styled.div`
  border: 2px solid #d4d4d4;
  border-radius: 2rem;
  height: 40rem;
  width: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  @media ${device.lgPhones} {
    height: 15rem;
  }

  @media ${device.lg} and (orientation: portrait) {
    height: 50rem;
  }

  @media ${device.md} {
    padding: 2rem;
    width: 20rem;
    height: 45rem;
  }
  @media ${device.md} and (orientation: landscape) {
    height: 15rem;
    gap: 4rem;
  }

  @media ${device.sm} {
    height: 20rem;
    width: 20rem;
  }
  @media ${device.xs} {
    height: 13rem;
    width: 13rem;
    gap: 0rem;
  }
`;

const StyledEmoji = styled.span`
  font-size: 7rem;

  @media ${device.lgPhones} {
    height: 5rem;
  }
  @media ${device.md} and (orientation: landscape) {
    height: 3rem;
  }

  @media ${device.sm} {
    height: 6rem;
    font-size: 5rem;
  }
  @media ${device.xs} {
    height: 3rem;
    font-size: 4rem;
  }
`;

const StyledDifficulty = styled.p`
  font-size: 2.4rem;
  color: #71717a;
`;

function ChooseDifficulty() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const handleLevelClick = (level: string) => {
    navigate(`/quiz/${category}/${level}`);
  };

  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledH1>Choose Difficulty</StyledH1>
        <StyledCategoryName>{category?.replace(/-/g, " ")}</StyledCategoryName>
        <StyledLine />
      </StyledTextContainer>
      <LevelContainer>
        <Level onClick={() => handleLevelClick("easy")}>
          <StyledEmoji>🥉</StyledEmoji>
          <StyledDifficulty>Easy</StyledDifficulty>
        </Level>
        <Level onClick={() => handleLevelClick("medium")}>
          <StyledEmoji>🥈</StyledEmoji>
          <StyledDifficulty>Medium</StyledDifficulty>
        </Level>
        <Level onClick={() => handleLevelClick("hard")}>
          <StyledEmoji>🥇</StyledEmoji>
          <StyledDifficulty>Hard</StyledDifficulty>
        </Level>
      </LevelContainer>
    </StyledContainer>
  );
}

export default ChooseDifficulty;
