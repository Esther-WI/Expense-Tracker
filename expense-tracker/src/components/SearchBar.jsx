function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      placeholder="Search expenses..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}
