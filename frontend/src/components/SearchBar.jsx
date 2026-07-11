import "../css/SearchBar.css";

function SearchBar({ search, setSearch }) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="🔍 Search by Name, Email, Course or City..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;