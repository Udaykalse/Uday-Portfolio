import React from 'react';
import './HackerBackground.css'; // Import the custom CSS for the background

const HackerBackground = ({ children }) => {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numColumns = 80;
  const numRows = 100;
  const columnSpacing = 20;
  const rowSpacing = 24; // Adjusted for more spacing
  const rainCharacters = Array.from({ length: numColumns * numRows }).map((_, index) => {
    const leftPosition = (index % numColumns) * columnSpacing; // Adjust based on desired spacing
    const topPosition = Math.floor(index / numColumns) * rowSpacing;
    const animationDuration = Math.random() * 10 + 5; // Random duration between 5s and 15s

    return (
      <div
        key={index}
        className="character"
        style={{
          left: `${leftPosition}px`,
          top: `${topPosition}px`,
          animationDuration: `${animationDuration}s`
        }}
      >
        {characters[Math.floor(Math.random() * characters.length)]}
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {rainCharacters}
      <div className="container mx-auto px-4 py-12 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HackerBackground;
