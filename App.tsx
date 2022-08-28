import * as React from 'react';
import Cloud from './Cloud';
import useSimpleTimer from './useSimpleTimer';
import './style.css';

// Next need to work on the timer for the countdown
// https://github.com/amrlabib/react-timer-hook/blob/master/src/useTimer.js

export default function App() {
  const [progress, setProgress] = React.useState(0);
  const [flipped, onFlip] = React.useState(false);
  const [tick] = useSimpleTimer(5);

  const timedProgress = tick;

  return (
    <div className="cloud">
      <Cloud
        progress={timedProgress}
        dark
        // backgroundColors={['#cc6600', '#cc9900', '#ccff00']}
      />
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(parseInt(e.target.value))}
        />
      </div>
      <button
        onClick={() => {
          onFlip(!flipped);
          setProgress(0);
        }}
      >
        flip
      </button>
    </div>
  );
}
