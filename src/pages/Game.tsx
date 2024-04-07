import styled from "styled-components";
import {
  fetchData,
  nextQuestion,
  submitQuestion,
} from "../redux/slices/quizSlice";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../ui/Spinner";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  position: relative;
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

const StyledAnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledAnswers = styled.button`
  background-color: #f9fafb;
  height: 5rem;
  width: 45rem;
  border: 1px solid #d4d4d4;
  border-radius: 1rem;

  color: #18181b;
  font-weight: 500;
  font-size: 1.6rem;

  cursor: pointer;

  &.static {
    background-color: #f9fafb;
  }

  &.goodanswer {
    background-color: #34d399;
    transition: background-color 0.3s;
  }
  &.wronganswer {
    background-color: #f87171;
    transition: background-color 0.3s;
  }
`;

const StyledNextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  border: 1px solid #71717a;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border-radius: 10rem;
  font-weight: 300;

  position: absolute;
  bottom: 2rem;
  right: 3rem;
`;

function Game() {
  interface State {
    questions: any;
    isLoading: boolean;
  }

  const [isSubbmited, setIsSubmited] = useState(false);

  const { category } = useParams<{ category: string }>();
  const { difficulty } = useParams<{ difficulty: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questions = useSelector((state: State) => state.Quiz.questions);
  const isLoading = useSelector((state: State) => state.Quiz.isLoading);
  const answers = useSelector((state: State) => state.Quiz.answers);
  const currentQuestion = useSelector(
    (state: State) => state.Quiz.currentQuestion
  );
  const isAnswerCorrect = useSelector(
    (state: State) => state.Quiz.isAnswerCorrect
  );
  const score = useSelector((state: State) => state.Quiz.score);

  useEffect(() => {
    dispatch(fetchData({ category, difficulty }));
  }, [category, difficulty, dispatch]);

  function handleAnswerClick(answer: object) {
    setIsSubmited(true);
    dispatch(submitQuestion(answer));
  }
  function handleNextClick() {
    setIsSubmited(false);

    if (currentQuestion === 9) {
      navigate("/finish");
    }

    dispatch(nextQuestion());
  }

  if (isLoading || !questions || !answers || !answers[0]) {
    return (
      <StyledGameContainer>
        <Spinner />
      </StyledGameContainer>
    );
  }
  return (
    <StyledGameContainer>
      <StyledQuestion
        dangerouslySetInnerHTML={{ __html: questions[currentQuestion] }}
      />
      <StyledPoints>Points: {score}</StyledPoints>
      <StyledAnswersContainer>
        {answers[currentQuestion].map((answer, index) => (
          <StyledAnswers
            onClick={() => handleAnswerClick(answer)}
            disabled={isSubbmited}
            key={index}
            className={`${
              !isSubbmited
                ? "static"
                : isSubbmited && answer.correct === true
                ? "goodanswer"
                : "wronganswer"
            }`}
            dangerouslySetInnerHTML={{ __html: answer.text }}
          />
        ))}
      </StyledAnswersContainer>
      {isSubbmited == true && (
        <StyledNextButton onClick={() => handleNextClick()}>
          Next
          <IconContext.Provider value={{ color: "#71717a", size: "2rem" }}>
            <FaLongArrowAltRight />
          </IconContext.Provider>
        </StyledNextButton>
      )}
    </StyledGameContainer>
  );
}

export default Game;
