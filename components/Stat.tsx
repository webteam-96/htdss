export default function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="font-display text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm text-teal-100">{label}</div>
    </div>
  );
}
