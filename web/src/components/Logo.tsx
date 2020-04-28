import React from "react";

export default ({
  title,
  className,
  width,
  height,
}: {
  title?: string;
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 176 137"
    fill="none"
    className={className}
  >
    {title && <title>{title}</title>}
    <path
      d="M98.049 40.75L138.184 0h17.62l-48.945 49.696-8.81-8.945zM25.52 137V63.127l13.431 11.9V137H25.52zM138.343 137V75.026l11.605-11.899.483 73.873h-12.088z"
      fill="currentColor"
    />
    <path
      d="M0 0l87.304 87.227h-18.25l-56.23-56.18V137H0V0zM106.924 68.993L38.39.493H20.147l86.777 86.734 56.208-56.18V137h12.819V0l-69.027 68.993z"
      fill="currentColor"
    />
  </svg>
);
