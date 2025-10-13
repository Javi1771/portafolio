export function Badge({ children, color='violet', className='' }) {
  const map = {
    violet: 'from-violet-500 to-purple-600',
    cyan: 'from-cyan-500 to-blue-600',
    emerald: 'from-emerald-500 to-green-600',
    rose: 'from-rose-500 to-pink-600',
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${map[color]} text-white/90 ${className}`}>
      {children}
    </span>
  );
}
