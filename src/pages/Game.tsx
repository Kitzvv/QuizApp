import styled from "styled-components";
import { fetchData } from "../redux/slices/quizSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../ui/Spinner";

const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

const StyledQuestion = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: #71717a;
  text-align: center;

  padding: 2rem;
`;

const StyledPoints = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #71717a;
  margin-top: -1rem;
`;

const StyledAnswers = styled.p`
  height: 5rem;
  width: 45rem;
  border: 1px solid #d4d4d4;
  border-radius: 1rem;

  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f9fafb;

  cursor: pointer;

  &.goodAnswer {
    background-color: #34d399;
  }
  &.wrongAnswer {
    background-color: #f87171;
  }
`;

function Game() {
  interface State {
    questions: any;
    isLoading: boolean;
  }
  const { category } = useParams<{ category: string }>();
  const { difficulty } = useParams<{ difficulty: string }>();
  const dispatch = useDispatch();

  const questions = useSelector((state: State) => state.Quiz.questions);
  const isLoading = useSelector((state: State) => state.Quiz.isLoading);
  const answers = useSelector((state: State) => state.Quiz.answers);

  useEffect(() => {
    dispatch(fetchData({ category, difficulty }));
  }, [category, difficulty, dispatch]);

  if (isLoading || !questions || !answers || !answers[0]) {
    return (
      <StyledGameContainer>
        <Spinner />
      </StyledGameContainer>
    );
  }
  return (
    <StyledGameContainer>
      <StyledQuestion dangerouslySetInnerHTML={{ __html: questions[0] }} />
      <StyledPoints>Points: 0</StyledPoints>
      {answers[0].map((answer, index) => (
        <StyledAnswers
          key={index}
          dangerouslySetInnerHTML={{ __html: answer.text }}
        />
      ))}
    </StyledGameContainer>
  );
}

export default Game;
