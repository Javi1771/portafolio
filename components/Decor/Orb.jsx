export default function Orb({ className='', gradient='from-violet-200/20 to-purple-300/20' }) {
  return <div className={`absolute rounded-full blur-3xl animate-float ${className} bg-gradient-to-br ${gradient}`} />;
}
