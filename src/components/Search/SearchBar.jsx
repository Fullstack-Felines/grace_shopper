import React from "react";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const submitClicked = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div>
      <div className="searchbar">
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={submitClicked}
          type="text"
          placeholder="Search kittens"
        />
      </div>
    </div>
  );
}
