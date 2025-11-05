export default function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center gap-2">
      <input
        className="border border-gray-300 rounded px-2 py-1 w-64"
        type="text"
        placeholder="Search currency..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="submit"
        className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-500 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
