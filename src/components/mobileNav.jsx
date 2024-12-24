import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { toggleNav } from "../redux/slices/mobileNav";
import changeTheme from "../utils/changeTheme";
import { setCategoryId } from "../redux/slices/filterSlice";

import { Link } from "react-router";
import { categories } from "../assets/list";

import sun from "./../assets/img/svgicons/sun.svg";
import moon from "./../assets/img/svgicons/moon.svg";
import mobileClose from "./../assets/img/svgicons/mobile-close.svg";

const MobileNav = () => {
  const { themeCurrent } = useSelector((state) => state.theme);
  const { mobileNav } = useSelector((state) => state.mobileNav);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(toggleTheme(changeTheme(themeCurrent)));
    localStorage.setItem("theme", themeCurrent === "light" ? "dark" : "light");
  };

  const handleMobileBtn = () => {
    dispatch(toggleNav(!mobileNav));
    document.body.classList.toggle("no-scroll");
  };

  const handleClickCategory = (category) => {
    dispatch(setCategoryId(category));
    dispatch(toggleNav(!mobileNav));
  };

  return (
    <div className={mobileNav ? "mobile-nav mobile-nav--open" : "mobile-nav"}>
      <div className="mobile-btn-top">
        <button
          className={
            themeCurrent === "light"
              ? "dark-mode-btn "
              : "dark-mode-btn dark-mode-btn--active"
          }
          onClick={() => handleThemeChange()}
        >
          <img className="icon sun" src={sun} alt="sun" />
          <img className="icon moon" src={moon} alt="moon" />
        </button>
        <button
          className="mobile-btn-wrap mobile-btn-wrap-open"
          onClick={handleMobileBtn}
        >
          <img src={mobileClose} className="icon mobile-close" alt="" />
        </button>
      </div>
      <ul className="mobile-nav__list">
        {categories.map((item, index) => (
          <Link
            to={`/`}
            key={item.id}
            onClick={() => handleClickCategory(item.id)}
          >
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">{item.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
