import { DNA } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div>
      <DNA
        visible={true}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass={s.wrapper}
      />
    </div>
  );
};

export default Loader;
