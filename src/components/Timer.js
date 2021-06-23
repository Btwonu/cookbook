import { useState, useEffect, useRef } from 'react';

import Button from './Button';

function Timer({ scheduledDuration = 10000 }) {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [duration, setDuration] = useState(scheduledDuration);
  const [active, setActive] = useState(false);
  const remaining = useRef();

  useEffect(() => {
    let intervalId;
    let initialTime = Date.now();

    const run = () => {
      const diff = Date.now() - initialTime;
      remaining.current = duration - diff;

      if (remaining.current < 0) {
        remaining.current = 0;
      }

      setTime(msToTime(remaining.current));

      if (remaining.current === 0) {
        console.log('Clearing interval because remaining is 0');
        clearTimeout(intervalId);
        setActive(false);
      }
    };

    if (active) {
      console.log('interval ran');
      intervalId = setInterval(() => run(), 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [active, duration]);

  const msToTime = (duration) => {
    let milliseconds = parseInt(duration % 1000, 10);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return {
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  };

  const start = () => {
    if (!active) {
      setActive(true);
    }
  };

  const pause = () => {
    setDuration(remaining.current);
    setActive(false);
  };

  const stop = () => {
    setDuration(0);
    remaining.current = 0;
    setTime(msToTime(0));
    setActive(false);
  };

  const onWheelHandler = (e) => {
    const direction = e.deltaY < 0 ? 'up' : 'down';

    const msConverter = {
      hours: 60 * 60 * 1000,
      minutes: 60 * 1000,
      seconds: 1000,
      milliseconds: 1,
    };

    if (direction === 'up') {
      let valueType = e.target.className.split('timer__')[1];
      let newDuration = duration + msConverter[valueType];

      setDuration(newDuration);
      setTime(msToTime(newDuration));
    } else if (direction === 'down') {
      let valueType = e.target.className.split('timer__')[1];
      let newDuration = duration - msConverter[valueType];

      if (newDuration < 0) {
        newDuration = 0;
      }

      setDuration(newDuration);
      setTime(msToTime(newDuration));
    }
  };

  const timetableClickHandler = () => {
    console.log('click');
  };

  return (
    <div className="timer flex flex-col items-center">
      <div
        className="timer__timetable text-6xl font-mono"
        onClick={timetableClickHandler}
      >
        <span className="timer__hours" onWheel={onWheelHandler}>
          {time.hours.toString().padStart(2, '0')}
        </span>
        :
        <span className="timer__minutes" onWheel={onWheelHandler}>
          {time.minutes.toString().padStart(2, '0')}
        </span>
        :
        <span className="timer__seconds" onWheel={onWheelHandler}>
          {time.seconds.toString().padStart(2, '0')}
        </span>
        :
        <span className="timer__milliseconds" onWheel={onWheelHandler}>
          {time.milliseconds.toString().padStart(3, '0')}
        </span>
      </div>

      <div className="flex gap-2 pt-6">
        <Button onClick={start}>Start</Button>
        <Button onClick={pause}>Pause</Button>
        <Button onClick={stop}>Reset</Button>
      </div>
    </div>
  );
}

export default Timer;
