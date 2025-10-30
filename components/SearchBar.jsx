export default function SearchBar() {
  return (
    <>
      <form>
        <input
          className="border-1 border-gray-100 rounded mb-4 px-2"
          type="text"
          placeholder="Search..."
          //   value={searchQuery}
          //   onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="border-1 border-gray-100 px-2 ml-1 rounded"
        >
          Search
        </button>
      </form>
    </>
  );
}
