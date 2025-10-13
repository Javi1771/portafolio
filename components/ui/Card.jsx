export default function Card({ className='', ...props }) {
  return (
    <div
      className={`relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all ${className}`}
      {...props}
    />
  );
}
