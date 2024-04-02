import styled from "styled-components";

const LevelContainer = styled.div`
  display: flex;
  height: 55rem;

  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  padding: 5rem;
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
  margin-top: 5rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const Level = styled.div`
  border: 2px solid #d4d4d4;
  border-radius: 2rem;
  height: 100%;
  width: 25rem;

  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
`;

const StyledEmoji = styled.h1`
  font-size: 7rem;
`;

const StyledDifficulty = styled.p`
  font-size: 2.4rem;
  color: #71717a;
`;

const StyledButton = styled.button`
  background-color: #fff;
  padding: 2rem 4rem;
  font-size: 1.6rem;
  border-radius: 10rem;
  border: 1px solid #4f46e5;
  color: #292524;

  &:hover {
    background-color: #eef2ff;
    transition: all 0.5s;
  }
`;

function ChooseLevel() {
  return (
    <StyledContainer>
      <StyledH1>Choose Difficulty</StyledH1>
      <LevelContainer>
        <Level>
          <StyledEmoji>🥉</StyledEmoji>
          <StyledDifficulty>Easy</StyledDifficulty>
          <StyledButton>Play now</StyledButton>
        </Level>
        <Level>
          <StyledEmoji>🥈</StyledEmoji>
          <StyledDifficulty>Medium</StyledDifficulty>
          <StyledButton>Play now</StyledButton>
        </Level>
        <Level>
          <StyledEmoji>🥇</StyledEmoji>
          <StyledDifficulty>Hard</StyledDifficulty>
          <StyledButton>Play now</StyledButton>
        </Level>
      </LevelContainer>
    </StyledContainer>
  );
}

export default ChooseLevel;
