import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

export default function TypingSubtitle({ prefersReducedMotion }) {
  const { text, showCursor } = useTypewriter(prefersReducedMotion);

  return (
    <span className="hero-typing">
      {text}
      <span className="typing-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </span>
  );
}
