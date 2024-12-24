import arrowDown from "./../../assets/img/svgicons/arrow-down.svg";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort1 } from "../../redux/slices/filterSlice";

const SortSelect = ({ List, title }) => {
  const { selectSort1 } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const sortRef = useRef(null);

  const onChangeListItem = (sort) => {
    dispatch(setSort1(sort));
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const onChange = () => {};

  useEffect(() => {
    const handleClickOutside = (event) => {
      !sortRef.current.contains(event.target) && setIsOpen(false);
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="updates__sort-select">
      <div className="select-wrapper">
        <button
          className="updates__sort-btn updates__sort-new"
          onClick={handleOpen}
        >
          {selectSort1.sort ? List[0].arr[selectSort1.index] : title}
          <img className="icon arrow-down" src={arrowDown} alt="sun" />
        </button>
        <ul
          className={
            isOpen
              ? "updates__sort-btn-list updates__sort-btn-list-visible"
              : "updates__sort-btn-list"
          }
        >
          {List[0].arr.map((el, index) => (
            <li
              key={index}
              className={
                selectSort1.index === index
                  ? "updates__sort-item active"
                  : "updates__sort-item"
              }
              onClick={() =>
                onChangeListItem({ index: index, sort: List[0].sort })
              }
            >
              {el}
            </li>
          ))}
        </ul>
        <input
          type="text"
          value=""
          className="updates__sort-hidden"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SortSelect;
