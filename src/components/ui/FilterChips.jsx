export default function FilterChips({ filters, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter === active ? null : filter)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
            active === filter
              ? "bg-brand-600 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
