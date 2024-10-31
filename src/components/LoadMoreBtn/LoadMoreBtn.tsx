import s from "./LoadMoreBtn.module.css";

interface ILoadProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<ILoadProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
