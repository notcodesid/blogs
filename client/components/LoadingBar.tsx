import React from 'react'

interface CircularLoaderProps {
  size?: number
  strokeWidth?: number
  percentage?: number
}

export default function CircularLoader({
  size = 40,
  strokeWidth = 4,
  percentage = 25
}: CircularLoaderProps) {
  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 2
  const dash = (percentage * circumference) / 100

  return (
    <svg width={size} height={size} viewBox={viewBox} className="rotate">
      <circle
        fill="none"
        stroke="#1a1a1a"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke="#3b82f6"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeLinecap="round"
        style={{
          transition: 'stroke-dasharray 0.5s ease 0s'
        }}
      />
      <style jsx>{`
        .rotate {
          animation: rotation 1s linear infinite;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </svg>
  )
}