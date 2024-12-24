import arrowDown from "./../../assets/img/svgicons/arrow-down.svg";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort2 } from "../../redux/slices/filterSlice";
const SortSelect2 = ({ List, title }) => {
  const { selectSort2 } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const sortRef = useRef(null);

  const onChangeListItem = (index) => {
    dispatch(setSort2(index));
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
  });

  return (
    <div ref={sortRef} className="updates__sort-select">
      <div className="select-wrapper">
        <button
          className="updates__sort-btn updates__sort-new"
          onClick={handleOpen}
        >
          {selectSort2.sort ? List[1].arr[selectSort2.index] : title}
          <img className="icon arrow-down" src={arrowDown} alt="sun" />
        </button>
        <ul
          className={
            isOpen
              ? "updates__sort-btn-list updates__sort-btn-list-visible"
              : "updates__sort-btn-list"
          }
        >
          {List[1].arr.map((el, index) => (
            <li
              key={index}
              className={
                selectSort2.index === index
                  ? "updates__sort-item active"
                  : "updates__sort-item"
              }
              data-value={index}
              onClick={() =>
                onChangeListItem({ index: index, sort: List[1].sort })
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

export default SortSelect2;
