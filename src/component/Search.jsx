import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";


function Search() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      navigate(`/${text}`);
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search places, states, destinations…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button text="Explore" />
    </form>
  );
}

export default Search;
