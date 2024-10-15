// components/Chip.jsx
import React from 'react';
import '../styles/Chip.css';

const Chip = ({ content }: { content: string }) => {
  return <span className="chip">{content}</span>;
};

export default Chip;
