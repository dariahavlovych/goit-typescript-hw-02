import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImagesByQuery } from "./services/unsplash-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast from "react-hot-toast";

// TODO
// 2. add StyleS
// 3. add additional info about img???
// 4. handle last page???

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getPhotos = async () => {
      try {
        setisError(false);
        setIsLoading(true);
        const data = await fetchImagesByQuery(page, searchQuery);
        if (data.length === 0) {
          toast("Nothing to show. Please change your search query");
        }
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

  const handleModalOpening = (image) => {
    setIsModalOpened(true);
    setModalImage(image);
  };

  const handleModalClosing = () => {
    setIsModalOpened(false);
  };

  return (
    <>
      <SearchBar setSearchQuery={handleSetSearchQuery} />
      {!!photos.length && (
        <ImageGallery photos={photos} onImageClick={handleModalOpening} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {photos.length > 0 && <LoadMoreBtn onClick={handleChangePage} />}
      {isModalOpened && (
        <ImageModal
          isModalOpened={isModalOpened}
          closeModal={handleModalClosing}
          modalImage={modalImage}
        />
      )}
    </>
  );
}

export default App;
