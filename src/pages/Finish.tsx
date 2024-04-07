import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { finishGame } from "../redux/slices/quizSlice";

const StyledFinishContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2rem;
`;

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  text-align: center;
  margin-top: 6rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledTextContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const StyledH3 = styled.h3`
  color: #71717a;
  font-size: 3rem;
  text-align: center;
  margin-top: 4rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledText = styled.p`
  color: #71717a;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
`;

const StyledEndButton = styled.button`
  height: 5rem;
  width: 25rem;

  margin-top: 10rem;
  background-color: #ffffff;
  border: 1px solid #71717a;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 10rem;
  font-weight: 300;
  cursor: pointer;
`;

function Finish() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const score = useSelector((state: any) => state.Quiz.score);

  function handleFinishGame() {
    navigate("/");
    dispatch(finishGame());
  }

  return (
    <StyledFinishContainer>
      <StyledH1>Congratulations</StyledH1>
      <StyledTextContainer>
        <StyledH3>You end up with score {score} out of 100</StyledH3>
        <StyledText>
          Feel free to try out different categories or other difficulty
          settings.
        </StyledText>
        <StyledEndButton onClick={handleFinishGame}>Finish</StyledEndButton>
      </StyledTextContainer>
    </StyledFinishContainer>
  );
}

export default Finish;
