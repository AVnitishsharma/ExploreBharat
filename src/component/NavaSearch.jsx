import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavaSearch() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      navigate(`/${text}`);
    }
  };

  return (
    <form className="navsearch" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="..........."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit"><i className="ri-search-line"></i></button>
    </form>
  );
}

export default NavaSearch;
