import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImagesByQuery } from "./services/unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  // const [isModalOpened, setIsModalOpened] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getPhotos = async () => {
      try {
        setisError(false);
        setIsLoading(true);
        const data = await fetchImagesByQuery(page, searchQuery);
        setPhotos((prev) => [...prev, ...data]);
      } catch {
        setisError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [page, searchQuery]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetSearchQuery = (query) => {
    setSearchQuery(query);
    setPhotos([]);
    setPage(1);
  };

  return (
    <>
      <SearchBar setSearchQuery={handleSetSearchQuery} />
      {!!photos.length && <ImageGallery photos={photos} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn onClick={handleChangePage} />}
    </>
  );
}

export default App;
