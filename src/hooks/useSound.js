import { useState, useEffect } from 'react';

function useSound(url) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggleSound = () => setPlaying(!playing);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));

    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggleSound];
}

export default useSound;
