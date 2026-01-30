import React from "react";

export default function AnimatedUnderline({
  width = 80,
  height = 6,
  lineColor = "#0A1833",
  dotColor = "#fff",
  duration = 1.5
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height }}
    >
      {/* The underline */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "100%",
          height: height / 2,
          background: lineColor,
        }}
      />
      {/* The animated dot */}
      <div
        className="absolute top-1/2 -translate-y-1/2 rounded-full animate-dot-move"
        style={{
          width: height,
          height: height,
          background: dotColor,
          boxShadow: `0 0 0 2px ${lineColor}`,
          animationDuration: `${duration}s`
        }}
      />
      <style>
        {`
          @keyframes dot-move {
            0% { left: 0; }
            100% { left: calc(100% - ${height}px); }
          }
          .animate-dot-move {
            animation: dot-move linear infinite;
          }
        `}
      </style>
    </div>
  );
}
