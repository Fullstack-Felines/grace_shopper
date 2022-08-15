import React from "react";

export default function SearchBar() {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div className="searchbar">
        <input
          className="input"
          onChange={handleInput}
          type="text"
          placeholder="Search kittens"
        />
      </div>
    </div>
  );
}
