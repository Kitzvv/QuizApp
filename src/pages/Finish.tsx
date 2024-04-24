import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { finishGame } from "../redux/slices/quizSlice";
import { RootState } from "../redux/store";
import { device } from "../breakpoints";

const StyledFinishContainer = styled.div`
  max-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 2rem;

  @media ${device.lgPhones} {
    overflow: auto;
    /* background-color: blue; */
  }

  @media ${device.md} and (orientation: landscape) {
    overflow: auto;
    gap: 0rem;
  }

  @media ${device.sm} {
    gap: 1rem;
    justify-content: center;
  }
`;

const StyledH1 = styled.h1`
  color: #71717a;
  font-size: 4rem;
  text-align: center;
  margin-top: 6rem;
  font-weight: 600;

  @media ${device.lgPhones} {
    margin-top: 2rem;
  }

  @media ${device.md} and (orientation: landscape) {
    font-size: 3rem;
  }

  @media ${device.sm} {
    font-size: 3rem;
  }
`;

const StyledTextContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${device.md} {
    gap: 0rem;
    justify-content: start;
  }
  @media ${device.sm} {
    gap: 0rem;
    justify-content: start;
  }
`;

const StyledH3 = styled.h3`
  color: #71717a;
  font-size: 3rem;
  text-align: center;
  margin-top: 4rem;
  font-weight: 600;

  @media ${device.lgPhones} {
    margin-top: 0rem;
  }

  @media ${device.md} and (orientation: landscape) {
    font-size: 2rem;
  }

  @media ${device.sm} {
    margin-top: 0rem;
    font-size: 2rem;
  }
`;

const StyledText = styled.p`
  color: #71717a;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;

  @media ${device.md} and (orientation: landscape) {
    padding: 0rem 2rem;
    font-size: 1.5rem;
    text-wrap: wrap;
  }

  @media ${device.sm} {
    padding: 0rem 2rem;
    font-size: 1.5rem;
    text-wrap: wrap;
  }
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

  @media ${device.lgPhones} {
    margin-top: 0rem;
    margin-bottom: 30rem;
    height: 5rem;
    width: 25rem;
  }
  @media ${device.sm} {
    margin-top: 0rem;
  }

  @media ${device.md} and (orientation: landscape) {
    margin-top: 0rem;
    height: 4rem;
    margin-bottom: 10rem;
    /* width: 10rem; */
  }
`;

function Finish() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const score = useSelector((state: RootState) => state.quiz.score);
  const gameOver = useSelector((state: RootState) => state.quiz.gameOver);

  function handleFinishGame() {
    navigate("/");
    dispatch(finishGame());
  }

  return (
    <StyledFinishContainer>
      <StyledH1>
        {gameOver === false ? "Congratulations" : "You ran out of time"}
      </StyledH1>
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
