import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = ({ setSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    if (!query) {
      return toast("Please enter your search query");
    }
    setSearchQuery(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoSearchOutline />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
