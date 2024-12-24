import { Link } from "react-router";

import logo from "./../assets/img/logo.png";

import HeaderTopUser from "./HeaderTopUser";
import TopSearch from "./TopSearch";
import Categories from "./Categories";

import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <section className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__top-row">
            <Link
              to="/"
              className="header__top-logo-wrapper"
              onClick={() => dispatch(setCategoryId(0))}
            >
              <div className="header__top-logo-img">
                <img src={logo} alt="logo" />
              </div>
              <div className="header__top-logo-name">
                <div className="header__top-logo-head">TORFILM</div>
                <div className="header__top-logo-text">
                  Большой каталог фильмов
                </div>
              </div>
            </Link>
            <div className="header__top-nav">
              <Categories />
            </div>
            <HeaderTopUser />
          </div>
          <TopSearch />
        </div>
      </div>
    </section>
  );
};

export default Header;
