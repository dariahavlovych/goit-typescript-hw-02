import { FormEvent } from "react";
import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
import s from "./SearchBar.module.css";

interface ISearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ setSearchQuery }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;

    if (!query) {
      return toast("Please enter your search query");
    }
    setSearchQuery(query);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.searchBtn}>
          <IoSearchOutline className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
