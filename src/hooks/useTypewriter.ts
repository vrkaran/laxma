import { useEffect, useState } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      if (charIndex < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          startTyping();
        }, speed);
      } else {
        setIsComplete(true);
        onComplete?.();
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay, onComplete]);

  return { displayedText, isComplete };
};

export const useTypewriterMultiple = (
  texts: string[],
  speed: number = 50,
  delayBetween: number = 500
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTexts, setDisplayedTexts] = useState<string[]>(
    texts.map(() => '')
  );

  const { displayedText, isComplete } = useTypewriter({
    text: texts[currentIndex] || '',
    speed,
    delay: 0,
    onComplete: () => {
      if (currentIndex < texts.length - 1) {
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
        }, delayBetween);
      }
    },
  });

  useEffect(() => {
    const newTexts = [...displayedTexts];
    newTexts[currentIndex] = displayedText;
    setDisplayedTexts(newTexts);
  }, [displayedText, currentIndex]);

  return displayedTexts;
};
