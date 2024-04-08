import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { StyledLine } from "./Homepage";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
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
  display: flex;
  height: 50rem;

  justify-content: space-between;
  width: 100%;
  padding: 5rem;
`;

const Level = styled.div`
  border: 2px solid #d4d4d4;
  border-radius: 2rem;
  height: 100%;
  width: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const StyledEmoji = styled.span`
  font-size: 7rem;
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
