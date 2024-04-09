import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";

const StyledProgressBar = styled(ProgressBar)`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

function ProgressBarComponent() {
  const currentQuestion = useSelector(
    (state: RootState) => state.quiz.currentQuestion
  );

  const questions = useSelector((state: RootState) => state.quiz.questions);

  return (
    <StyledProgressBar
      completed={currentQuestion + 1}
      maxCompleted={questions.length}
      bgColor="#c7d2fe"
      borderRadius="0.2rem"
      customLabel=" "
      baseBgColor="#f5f5f5"
      height="0.7rem"
    />
  );
}

export default ProgressBarComponent;
