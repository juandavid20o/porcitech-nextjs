export default function Input({ label, error, ...props }) {
  return (
    <div className="w-full space-y-1">
      {label && <label className="block text-xs font-bold text-slate-600 uppercase">{label}</label>}
      <input
        {...props}
        className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
      />
      {error && <p className="text-xs text-rose-500 font-semibold">{error}</p>}
    </div>
  );
}