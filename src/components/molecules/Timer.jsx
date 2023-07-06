import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail } from "../../store/slices/userSlice";

const getHours = (time) => {
  const hour = parseInt((time / (1000 * 60 * 60)) % 24);
  if (hour < 10) {
    return "0" + String(hour);
  } else {
    return String(hour);
  }
};
const getMinutes = (time) => {
  const minute = parseInt((time / (1000 * 60)) % 60);
  if (minute < 10) {
    return "0" + String(minute);
  } else {
    return String(minute);
  }
};

const getSeconds = (time) => {
  const second = parseInt((time / 1000) % 60);
  if (second < 10) {
    return "0" + String(second);
  } else {
    return String(second);
  }
};

const Timer = ({ timeout }) => {
  const loggedInAt = useSelector((state) => state.user.loggedInAt);
  const loggedInUntil = loggedInAt + timeout;

  const dispatch = useDispatch();

  const [timeLeft, setTimeLeft] = useState(loggedInUntil);

  useEffect(() => {
    const timer = setInterval(() => {
      // 시간 지나면 자동 로그아웃
      setTimeLeft(loggedInUntil - (new Date().getTime()));
      if (timeLeft < 0) {
        dispatch(
          setEmail({
            email: null,
            loggedInAt: null,
          })
        );
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{display: "inline-block", backgroundColor: "black", color: "white"}}>
      {(() => {
        if (loggedInAt) {
          return (
            <>
              <span>
                {getHours(timeLeft) +
                  ":" +
                  getMinutes(timeLeft) +
                  ":" +
                  getSeconds(timeLeft)}
              </span>
            </>
          );
        }
      })()}
    </div>
  );
};

export default Timer;
