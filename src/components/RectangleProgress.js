import React from 'react';

const RectangleProgress = ({
  completed = 0,
  total = 1,
  maxRectangles = 15,
  content = [],
  completedColor = "#28a745",
  pendingColor = "#e9ecef",
}) => {

  // Calculate how many rectangles should be filled
  const fillRatio = total > 0 ? completed / total : 0;
  const filledRectangles = Math.round(fillRatio * maxRectangles);
  
  // Generate array of rectangles
  const rectangles = Array.from({ length: maxRectangles }, (_, index) => {
    const isFilled = index < filledRectangles;
    
    return (
      <div
        key={index}
        className="flex-1 h-full border border-gray-300 mr-1 flex items-center justify-center"
        style={{
          backgroundColor: isFilled ? completedColor : pendingColor
        }}
      >
        {content[index]}
      </div>
    );
  });

  return (
    <div className="flex h-full gap-1">
      {rectangles}
    </div>
  );
};

export default RectangleProgress;
