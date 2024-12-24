import cross from "./../assets/img/svgicons/cross.svg";
import SortSelect from "./SortSelect/SortSelect";
import SortSelect2 from "./SortSelect/SortSelect2";
import SortSelect3 from "./SortSelect/SortSelect3";
import SortSelect4 from "./SortSelect/SortSelect4";
import { list } from "./../assets/list";
import { useDispatch } from "react-redux";
import { deleteSorts } from "../redux/slices/filterSlice";

const MainSort = ({ hide }) => {
  const dispatch = useDispatch();
  if (hide) {
    return <></>;
  }

  return (
    <div className="updates__sort-wrapper main__sort-wrapper">
      <div className="updates__sort-list">
        <SortSelect List={list} title="По алфавиту" />
        <SortSelect2 List={list} title="По году" />
        <SortSelect3 List={list} title="Страна" />
        <SortSelect4 List={list} title="Рейтинг" />
        <div
          className="updates__sort-cross-wrapper"
          onClick={() => dispatch(deleteSorts())}
        >
          <img className="icon cross" src={cross} alt="cross" />
        </div>
      </div>
    </div>
  );
};

export default MainSort;
