export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold">{title}</h2>
            {subtitle && <p className="text-white/70 mt-1">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
