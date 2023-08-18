import React, { memo } from "react";

interface Props {
  number: number;
  score: number;
  setIsOver: React.Dispatch<React.SetStateAction<boolean>>;
  isReastaring: boolean;
}

const Header: React.FC<Props> = ({
  number,
  score,
  setIsOver,
  isReastaring,
}) => {
  const [timer, setTimer] = React.useState<number>(60);
  React.useEffect(() => {
    let interval = setInterval(() => {
      if (timer <= 0) {
        setIsOver(true);
        clearInterval(interval);
      } else {
        setTimer((prev) => prev - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  React.useEffect(() => {
    setTimer(60);
  }, [isReastaring]);

  return (
    <div className="header">
      <div className="header-board">
        <div className="random-num">
          <div>Number</div>
          <div className="number">{number}</div>
        </div>
        <div className="timer">
          <div>Time</div>
          <div className="number">{timer}</div>
        </div>
        <div className="score">
          <div>Score</div>
          <div className="number">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
