const TestSprite = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="ts_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6366f1" />
        <stop offset="1" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    {/* Hexagon shape */}
    <path
      d="M50 4 L91 27 L91 73 L50 96 L9 73 L9 27 Z"
      fill="url(#ts_grad)"
    />
    {/* T letter */}
    <rect x="30" y="32" width="40" height="8" rx="3" fill="white" />
    <rect x="46" y="40" width="8" height="26" rx="3" fill="white" />
    {/* Small dot accent */}
    <circle cx="72" cy="68" r="5" fill="white" fillOpacity="0.5" />
  </svg>
);

export { TestSprite };
export default TestSprite;
