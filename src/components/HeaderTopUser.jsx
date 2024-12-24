import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import { toggleTheme } from "../redux/slices/themeSlice";
import { useRef } from "react";

import changeTheme from "./../utils/changeTheme";
import { useEffect } from "react";

import { toggleNav } from "../redux/slices/mobileNav";

import heart from "./../assets/img/svgicons/heart.svg";
import sun from "./../assets/img/svgicons/sun.svg";
import moon from "./../assets/img/svgicons/moon.svg";
import mobileBtn from "./../assets/img/svgicons/mobile-btn.svg";

const HeaderTopUser = () => {
  const { themeCurrent } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const navBtnRef = useRef();
  const { mobileNav } = useSelector((state) => state.mobileNav);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [themeCurrent]);

  const handleThemeUserChange = () => {
    dispatch(toggleTheme(changeTheme(themeCurrent)));
    localStorage.setItem("theme", themeCurrent === "light" ? "dark" : "light");
  };

  const handleMobileBtn = () => {
    dispatch(toggleNav(!mobileNav));
    document.body.classList.toggle("no-scroll");
  };

  return (
    <div className="header__top-user">
      <div className="header__top-favorites">
        <Link to="/favorites" className="header__top-favorites-wrapper">
          <img className="icon" src={heart} alt="heart" />
          <div className="nav-item-wrapper-name">Избранное</div>
        </Link>
      </div>
      <button
        ref={navBtnRef}
        className="mobile-btn-wrap"
        onClick={handleMobileBtn}
      >
        <img className="icon mobile-close" src={mobileBtn} />
      </button>
      <button
        className={
          themeCurrent === "light"
            ? "dark-mode-btn "
            : "dark-mode-btn dark-mode-btn--active"
        }
        onClick={() => handleThemeUserChange()}
      >
        <img className="icon sun" src={sun} alt="sun" />
        <img className="icon moon" src={moon} alt="moon" />
      </button>
    </div>
  );
};

export default HeaderTopUser;
