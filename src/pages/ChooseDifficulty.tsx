import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const LevelContainer = styled.div`
  display: flex;
  height: 55rem;

  justify-content: space-between;
  width: 100%;
  padding: 5rem;

  margin-top: -5rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledLine = styled.div`
  height: 0.5rem;
  width: 4rem;
  margin-top: -2rem;

  background-color: #71717a;
`;

const StyledCategoryName = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: #71717a;
  text-transform: uppercase;
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
      <StyledH1>Choose Difficulty</StyledH1>
      <StyledLine />
      <StyledCategoryName>{category?.replace(/-/g, " ")}</StyledCategoryName>
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
