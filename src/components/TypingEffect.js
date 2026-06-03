import React, { useState, useEffect } from 'react';

const PHRASES = [
  'AI Agents',
  'DevSecOps',
  'Collecting One Piece & Pokemon Trading Cards',
  'Gaming on LEGO Batman: Legacy of the Dark Knight',
];

const TYPE_MS = 80;
const DELETE_MS = 40;
const PAUSE_AFTER_COMPLETE = 2000;
const PAUSE_AFTER_DELETE = 500;

function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Blinking cursor
  useEffect(() => {
    if (prefersReducedMotion) {
      setShowCursor(true);
      return;
    }
    const interval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Typing / deleting logic
  useEffect(() => {
    if (prefersReducedMotion) {
      // Show first phrase statically
      setText(PHRASES[0]);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];

    let timeout;

    if (!isDeleting && text === currentPhrase) {
      // Phrase fully typed — pause, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_COMPLETE);
    } else if (isDeleting && text === '') {
      // Fully deleted — pause, then next phrase
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
    } else if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, TYPE_MS);
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText((t) => t.slice(0, -1));
      }, DELETE_MS);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, prefersReducedMotion]);

  return (
    <p className="hero-subtitle">
      <span className="hero-subtitle-text">{text}</span>
      <span
        className="hero-cursor"
        style={{ opacity: showCursor ? 1 : 0 }}
        aria-hidden="true"
      >
        |
      </span>
    </p>
  );
}

export default TypingEffect;
