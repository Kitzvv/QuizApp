import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledProgressBar = styled(ProgressBar)`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

function ProgressBarComponent() {
  const currentQuestion = useSelector(
    (state: State) => state.Quiz.currentQuestion
  );

  const questions = useSelector((state: State) => state.Quiz.questions);

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
