import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tick } from "../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";

function Timer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gameTime = useSelector((state: State) => state.Quiz.gameTime);
  const gameOver = useSelector((state: State) => state.Quiz.gameOver);

  const mins = Math.floor(gameTime / 60);
  const seconds = gameTime % 60;

  useEffect(
    function () {
      let id: number | null = null;
      if (gameTime !== null && gameTime > 0) {
        id = setInterval(function () {
          dispatch(tick());
        }, 1000);
      }

      return () => {
        if (id !== null) {
          window.clearInterval(id);
        }
      };
    },
    [dispatch, gameTime, gameOver]
  );

  useEffect(() => {
    if (gameOver === true) {
      navigate("/finish");
    }
  }, [gameOver, navigate]);

  return (
    <>
      {mins.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
    </>
  );
}

export default Timer;
