"use client"
import React from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  trackColor?: string;
  progressColor?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 80,
  strokeWidth = 10,
  trackColor = "#ddd",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  // Handle invalid percentage values
  const validatedPercentage = Math.max(0, Math.min(100, percentage)); // Clamp between 0 and 100

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-label={`Progress: ${validatedPercentage}%`} // Accessibility: Add aria-label for screen readers.
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke={trackColor}
        strokeLinecap="round" // Optional: Makes the ends of the stroke rounded.
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        fill="none"
        stroke={"#02a95c"}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start at the top (12 o'clock)
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle" // Centers vertically within the bounding box.
        textAnchor="middle" // Centers horizontally.
        fontSize={`${size / 7}px`} //Adjust Font Size related with Size
        // fontWeight="bold"
      >
        {`${validatedPercentage}%`}
      </text>
    </svg>
  );
};

export const ProgressMeter = ({
  raisedAmount,
  goalAmount,
}: {
  raisedAmount: number;
  goalAmount: number;
}) => {
  const donationCount = 2930;
  const percentage = (raisedAmount / goalAmount) * 100;
  const roundedPercentage = percentage.toFixed(1);

  return (
    <div className="w-full flex items-center justify-between gap-5">
      <div className="flex-1">
        <div className="font-bold text-lg mb-1.5">
          <span>${raisedAmount.toLocaleString()}</span> raised
        </div>
        <div className="text-sm text-gray-500">
          ${goalAmount.toLocaleString()} goal
          <span className="mx-1">·</span>
          {donationCount.toLocaleString()} donations
        </div>
      </div>
      <div className="flex-shrink-0">
        <CircularProgress percentage={+roundedPercentage} />
      </div>
    </div>
  );
};
