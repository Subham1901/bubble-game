import React, { memo, useState } from "react";
import Header from "./Header";

const Container: React.FC = () => {
  const [isReastaring, setIsRestarting] = useState<boolean>(false);
  const [isOver, setIsOver] = React.useState<boolean>(false);
  const [score, setScore] = React.useState<number>(0);
  const [number, setNumber] = React.useState<number>(
    Math.floor(Math.random() * 10)
  );
  const reStartGame = () => {
    setIsRestarting(true);
    setScore(0);
    setNumber(Math.floor(Math.random() * 10));
    setIsOver(false);
  };
  const handleScore = (value: any) => {
    if (value === number) {
      setScore((prev) => prev + 10);
      setNumber(Math.floor(Math.random() * 10));
    }
  };

  return (
    <div className="main-container">
      <Header
        number={number}
        score={score}
        setIsOver={setIsOver}
        isReastaring={isReastaring}
      />

      {isOver ? (
        <div className="finalscore">
          You Scored {score}{" "}
          <span>
            <button className="restart" onClick={() => reStartGame()}>
              Restart Game
            </button>
          </span>
        </div>
      ) : (
        <div className="bubble-container">
          {[...Array(150)].map((_, index) => {
            const value: number = Math.floor(Math.random() * 10);
            return (
              <button
                className="bubble"
                onClick={() => handleScore(value)}
                key={index}
              >
                {value}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default memo(Container);
