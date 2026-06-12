export default function FilterChips({ filters, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter === active ? null : filter)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium backdrop-blur-md transition-all duration-200 ${
            active === filter
              ? "bg-[#007aff] text-white shadow-sm"
              : "bg-white/65 text-gray-600 hover:bg-white/90 border border-white/60"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
