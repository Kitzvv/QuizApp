import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledLine } from "./Homepage";
import { device } from "../breakpoints";

const StyledContainer = styled.div`
  height: 100;
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  overflow: auto;
`;

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  margin-top: 3rem;
  font-weight: 600;

  margin-bottom: -1.5rem;
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCategoryName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #71717a;
  text-transform: uppercase;
`;

const LevelContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5rem;

  @media ${device.lgPhones} {
    /* background-color: red; */
    justify-content: center;
    overflow-y: scroll;
    height: 20rem;
    padding-top: 2rem;
    /* height: 100vh; */
  }

  @media ${device.md} and (orientation: landscape) {
    /* background: blue; */
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @media ${device.md} {
    /* background-color: red; */
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    overflow-y: auto;
  }

  @media ${device.sm} {
    /* background-color: red; */
    align-items: center;
    justify-content: start;
    gap: 2rem;
    padding: 2rem;
    height: 100%;

    overflow: scroll;
  }
  @media ${device.xs} {
    /* background-color: red; */
    align-items: center;
    justify-content: start;
    gap: 2rem;
    padding: 2rem;
    height: 40rem;

    overflow: scroll;
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
    /* background-color: red; */
    justify-content: center;
    height: 100%;
    padding-top: 2rem;
  }

  @media ${device.md} {
    height: 10rem;
    width: 10rem;
    justify-content: space-around;

    width: 100%;
  }
  @media ${device.md} and (orientation: landscape) {
    justify-content: center;
    gap: 0rem;
  }
  @media ${device.sm} {
    gap: 0rem;
    align-items: center;
  }
`;

const StyledEmoji = styled.span`
  font-size: 7rem;

  @media ${device.lgPhones} {
    font-size: 5rem;
  }
  @media ${device.md} {
    font-size: 3rem;
  }
`;

const StyledDifficulty = styled.p`
  font-size: 2.4rem;
  color: #71717a;

  @media ${device.lgPhones} {
    font-size: 2rem;
  }
  @media ${device.sm} {
    font-size: 2rem;
  }
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
