import { useState, useEffect } from 'react';

const PHRASES = [
  'AI Agents',
  'DevSecOps',
  'Collecting One Piece & Pokemon Trading Cards',
  'Gaming on LEGO Batman: Legacy of the Dark Knight',
];

const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_PHRASE = 2000;
const PAUSE_DELETE = 500;

export default function useTypewriter(prefersReducedMotion = false) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typing / deleting logic — skip if reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setText(PHRASES[0]);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];
    let timeout;

    if (!isDeleting && text === currentPhrase) {
      // Phrase complete — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_PHRASE);
    } else if (isDeleting && text === '') {
      // Deletion complete — move to next phrase
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, PAUSE_DELETE);
    } else {
      // Typing or deleting
      timeout = setTimeout(() => {
        if (isDeleting) {
          setText(currentPhrase.substring(0, text.length - 1));
        } else {
          setText(currentPhrase.substring(0, text.length + 1));
        }
      }, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, prefersReducedMotion]);

  // Blinking cursor — skip if reduced motion
  useEffect(() => {
    if (prefersReducedMotion) {
      setShowCursor(false);
      return;
    }
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return { text, showCursor };
}
