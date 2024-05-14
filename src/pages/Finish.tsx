import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { finishGame } from "../redux/slices/quizSlice";
import { RootState } from "../redux/store";
import { device } from "../breakpoints";

const StyledFinishContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media ${device.lgPhones} {
    gap: 2rem;
    justify-content: start;
  }

  @media ${device.lg} and (orientation: portrait) {
    font-size: 3rem;
  }

  @media ${device.md} {
    gap: 10rem;
  }
  @media ${device.md} and (orientation: landscape) {
    gap: 1rem;
    justify-content: start;
  }

  @media ${device.sm} {
    justify-content: start;
    gap: 5rem;
  }

  @media ${device.sm} {
    justify-content: start;
    gap: 3rem;
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
    font-size: 3rem;
  }

  @media ${device.lg} and (orientation: portrait) {
    font-size: 8rem;
  }

  @media ${device.md} {
    margin-top: 0rem;
    font-size: 6rem;
  }

  @media ${device.md} and (orientation: landscape) {
    margin-top: 2rem;
    font-size: 3rem;
  }

  @media ${device.sm} {
    font-size: 4rem;
    margin-top: 2rem;
  }
`;
const StyledTextContainer = styled.div`
  padding: 2rem;

  @media ${device.lgPhones} {
    padding: 0rem;
  }
  @media ${device.md} and (orientation: landscape) {
    padding: 0rem;
  }

  @media ${device.sm} {
    padding: 4rem;
  }
`;

const StyledH3 = styled.h3`
  color: #71717a;
  font-size: 3rem;
  text-align: center;
  margin-top: 4rem;
  font-weight: 600;

  @media ${device.lgPhones} {
    font-size: 2rem;
    margin-top: 0rem;
  }

  @media ${device.lg} and (orientation: portrait) {
    font-size: 4rem;
  }

  @media ${device.md} {
    font-size: 4rem;
  }
  @media ${device.md} and (orientation: landscape) {
    font-size: 2rem;
    margin-top: 0rem;
  }

  @media ${device.sm} {
    font-size: 3rem;
    margin-top: 0rem;
  }
`;

const StyledText = styled.p`
  color: #71717a;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;

  @media ${device.lg} and (orientation: portrait) {
    font-size: 4rem;
  }

  @media ${device.md} {
    font-size: 2rem;
  }
`;

const StyledEndButton = styled.button`
  height: 5rem;
  width: 25rem;
  color: #71717a;
  font-weight: 500;

  background-color: #ffffff;
  border: 1px solid #71717a;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 10rem;

  cursor: pointer;

  @media ${device.lgPhones} {
    font-size: 2rem;
    height: 4rem;
  }
  @media ${device.lg} and (orientation: portrait) {
    font-size: 4rem;
    height: 10rem;
  }

  @media ${device.md} {
    font-size: 3rem;
    height: 7rem;
  }

  @media ${device.md} and (orientation: landscape) {
    font-size: 2rem;
    height: 4rem;
    width: 20rem;
  }

  @media ${device.sm} {
    font-size: 3rem;
    height: 5rem;
    padding: 0.5rem 1rem;
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
      </StyledTextContainer>

      <StyledEndButton onClick={handleFinishGame}>Finish</StyledEndButton>
    </StyledFinishContainer>
  );
}

export default Finish;
