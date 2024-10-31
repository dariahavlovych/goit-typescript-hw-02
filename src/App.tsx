import { useEffect, useState } from "react";
import "./App.css";
import { fetchImagesByQuery } from "./services/unsplash-api";
import toast from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import { IPhoto, IModal } from "./types";

function App() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setisError] = useState<boolean>(false);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalData, setModalData] = useState<IModal>({});

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getPhotos = async () => {
      try {
        setisError(false);
        setIsLoading(true);
        const data = await fetchImagesByQuery(page, searchQuery);
        if (data.results.length === 0) {
          toast("Nothing to show. Please change your search query");
        }
        setPhotos((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setisError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPhotos();
  }, [page, searchQuery]);

  const handleChangePage = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleSetSearchQuery = (query: string): void => {
    if (query === searchQuery) {
      return;
    }
    setSearchQuery(query);
    setPhotos([]);
    setPage(1);
  };

  const handleModalOpening = (modalData: IModal): void => {
    setIsModalOpened(true);
    setModalData(modalData);
  };

  const handleModalClosing = (): void => {
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
      {!!photos.length && page < totalPages && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      {isModalOpened && (
        <ImageModal
          isModalOpened={isModalOpened}
          closeModal={handleModalClosing}
          modalData={modalData}
        />
      )}
    </>
  );
}

export default App;
