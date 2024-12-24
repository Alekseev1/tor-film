import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../redux/slices/mobileNav";
import {
  setSort1,
  setSort2,
  setSort3,
  setSort4,
} from "../redux/slices/filterSlice";
import { list } from "./../assets/list";

import arrowDown from "./../assets/img/svgicons/arrow-down.svg";
import filter from "./../assets/img/svgicons/filter.svg";

const MobileFilter = () => {
  const { mobileFilter } = useSelector((state) => state.mobileNav);
  const { selectSort1, selectSort2, selectSort3, selectSort4 } = useSelector(
    (state) => state.filter
  );

  const dispatch = useDispatch();

  const handleMobileFilter = () => {
    dispatch(toggleFilter(!mobileFilter));
    document.body.classList.toggle("no-scroll");
  };

  const onChangeListItem = (sort) => {
    dispatch(setSort1(sort));
    dispatch(toggleFilter(!mobileFilter));
  };

  const onChangeListItem2 = (sort) => {
    dispatch(setSort2(sort));
    dispatch(toggleFilter(!mobileFilter));
  };
  const onChangeListItem3 = (sort) => {
    dispatch(setSort3(sort));
    dispatch(toggleFilter(!mobileFilter));
  };
  const onChangeListItem4 = (sort) => {
    dispatch(setSort4(sort));
    dispatch(toggleFilter(!mobileFilter));
  };

  return (
    <div
      className={
        mobileFilter ? "mobile-filter mobile-filter--open" : "mobile-filter"
      }
    >
      <div
        className="mobile-btn-top filter-btn-top"
        onClick={handleMobileFilter}
      >
        <button className="main__games-filter mobile-btn-filter-open">
          <img
            src={filter}
            className="icon filter mobile-filter-inverse"
            alt=""
          />
        </button>
      </div>

      <ul className="mobile-filter__list">
        <div className="mobile-first-child">
          <div className="header__top-filter-item is-open">
            <div className="filter-item-wrapper mobile-item-wrapper">
              <div className="filter-item-wrapper-name">По названию</div>
              <img src={arrowDown} alt="" />
            </div>
          </div>
          <div className="filter-item-selects">
            {list[0].arr.map((el, index) => (
              <div
                key={index}
                className={
                  index === selectSort1.index
                    ? "filter-item-select active"
                    : "filter-item-select"
                }
                onClick={() =>
                  onChangeListItem({ index: index, sort: list[0].sort })
                }
              >
                {el}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="header__top-filter-item is-open">
            <div className="filter-item-wrapper mobile-item-wrapper">
              <div className="filter-item-wrapper-name">По году</div>
              <img src={arrowDown} alt="" />
            </div>
            <div className="filter-item-selects">
              {list[1].arr.slice(0, 4).map((el, index) => (
                <div
                  key={index}
                  className={
                    index === selectSort2.index
                      ? "filter-item-select active"
                      : "filter-item-select"
                  }
                  onClick={() =>
                    onChangeListItem2({ index: index, sort: list[1].sort })
                  }
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="header__top-filter-item is-open">
            <div className="filter-item-wrapper mobile-item-wrapper">
              <div className="filter-item-wrapper-name">Страна</div>
              <img src={arrowDown} alt="" />
            </div>
            <div className="filter-item-selects">
              {list[2].arr.map((el, index) => (
                <div
                  key={index}
                  className={
                    index === selectSort3.index
                      ? "filter-item-select active"
                      : "filter-item-select"
                  }
                  onClick={() =>
                    onChangeListItem3({ index: index, sort: list[2].sort })
                  }
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="header__top-filter-item is-open">
            <div className="filter-item-wrapper mobile-item-wrapper">
              <div className="filter-item-wrapper-name">Рейтинг</div>
              <img src={arrowDown} alt="" />
            </div>
            <div className="filter-item-selects">
              {list[3].arr.map((el, index) => (
                <div
                  key={index}
                  className={
                    index === selectSort4.index
                      ? "filter-item-select active"
                      : "filter-item-select"
                  }
                  onClick={() =>
                    onChangeListItem4({ index: index, sort: list[3].sort })
                  }
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileFilter;
