import { useSelector, useDispatch } from "react-redux";
import { setIsSearch, setSearchValue } from "../redux/slices/searchSlice";
import { useRef } from "react";
import { useLocation } from "react-router";

import { toggleFilter } from "../redux/slices/mobileNav";

import search_icon from "./../assets/img/svgicons/search_icon.svg";
import search from "./../assets/img/svgicons/search.svg";
import cross from "./../assets/img/svgicons/cross.svg";
import crossGreen from "./../assets/img/svgicons/cross-green.svg";
import filter from "./../assets/img/svgicons/filter.svg";

const TopSearch = () => {
  const { searchValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { themeCurrent } = useSelector((state) => state.theme);

  const { mobileFilter } = useSelector((state) => state.mobileNav);

  const inputRef = useRef(null);

  let location = useLocation();

  const searchHandler = () => {
    if (searchValue) {
      dispatch(setSearchValue(searchValue));
      dispatch(setIsSearch(true));
    }
  };

  const crossHandler = () => {
    dispatch(setSearchValue(""));
    dispatch(setIsSearch(false));
    inputRef.current.focus();
  };

  if (location.pathname.match(/film/) || location.pathname.match(/favorites/)) {
    return null;
  }

  const handleMobileFilter = () => {
    dispatch(toggleFilter(!mobileFilter));
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div className="header__top-search">
      <div className="header__top-input-group">
        <img
          className="icon search_icon"
          src={themeCurrent === "light" ? search_icon : search}
          alt="moon"
        />

        <input
          ref={inputRef}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          value={searchValue}
          type="text"
          className="header__top-input"
          placeholder="Что хотите найти?"
        />
        {searchValue && (
          <img
            onClick={crossHandler}
            className="icon cross cross-input"
            src={themeCurrent === "light" ? cross : crossGreen}
            alt="cross"
          />
        )}
        <div className="header__top-input-filter" onClick={handleMobileFilter}>
          <img className="icon filter" src={filter} />
        </div>
        <button
          type="submit"
          className="header__top-input-btn"
          onClick={searchHandler}
        >
          <span>ПОИСК ФИЛЬМА</span>
        </button>
      </div>
    </div>
  );
};

export default TopSearch;
