export default function Button({ as: Tag = 'a', variant='primary', className='', children, ...props }) {
  const base = 'group inline-flex items-center justify-center px-8 py-3 font-semibold rounded-xl transition-all duration-300';
  const variants = {
    primary: 'text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:-translate-y-1',
    ghost: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-violet-500/60 hover:text-violet-300 hover:bg-violet-950/10',
    glass: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg',
  };
  return <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</Tag>;
}
