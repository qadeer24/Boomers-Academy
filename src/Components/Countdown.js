import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDifference = target - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      <div className="Count-Down-boxes  my-5">
        <div className="Count-Down-boxes-responsive">
          <div className="Count-Down text-center py-4">
            <p>{timeLeft.days}</p>
            <p> Days</p>
          </div>
          <div className="Count-Down text-center py-4">
            <p>{timeLeft.hours} </p>
            <p>Hours</p>
          </div>
        </div>
        <div className="Count-Down-boxes-responsive">
          <div className="Count-Down text-center py-4">
            <p>{timeLeft.minutes} </p>
            <p> Minutes</p>
          </div>
          <div className="Count-Down text-center py-4">
            <p>{timeLeft.seconds} </p>
            <p> Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
