import * as React from 'react';

export default function useSimpleTimer(seconds: number) {
  const [running, setRunning] = React.useState(false);
  const [complete, setComplete] = React.useState(false);
  const [tick, setTick] = React.useState(0);
  const timerRef = React.useRef<ReturnType<typeof setInterval>>();
  const tickRef = React.useRef(0);

  React.useEffect(() => {
    setRunning(true);
  }, []);

  const onTick = () => {
    const tick = tickRef.current;

    if (tick >= seconds * 10) {
      setComplete(true);
      clearInterval(timerRef.current);
    } else {
      tickRef.current = tick + 1;
      setTick(tickRef.current);
    }
  };

  if (!running) {
    if (!timerRef.current) {
      timerRef.current = setInterval(onTick, 100);
    }
  }

  const progress = (tick / seconds) * 10;

  return [progress, tick, complete] as const;
}
