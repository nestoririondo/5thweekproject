const SearchBar = ({ handleSubmit, handleSearch, search }) => {
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={
            search.searchBy === "story" ? "Search stories about..." : "Search comments about..."
          }
          onChange={(e) => {
            handleSearch("query", e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            handleSearch("searchBy", e.target.value);
          }}
        >
          <option value="story">Story</option>
          <option value="comment">Comment</option>
        </select>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
