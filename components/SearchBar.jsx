export default function SearchBar({ value, onChange }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mb-4 flex items-center gap-2"
    >
      <input
        className="border border-gray-300 rounded px-2 py-1 w-64"
        type="text"
        placeholder="Search currency..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="submit"
        className="border border-gray-300 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
      >
        Search
      </button>
    </form>
  );
}
