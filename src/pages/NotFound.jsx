import Info from "./../components/Info";
import Breadcrumbs from "./../components/Breadcrumbs";

import img404 from "./../assets/img/404.svg";
import { Link } from "react-router";

function Favorites() {
  const title = "Избранное";

  return (
    <>
      <Breadcrumbs title={title} />
      <div className="mobile-nav">
        <div className="mobile-btn-top">
          <button className="dark-mode-btn dark-mode-btn-mobile">
            <svg className="icon sun-mobile">
              <use
                href="./img/svgsprite/sprite.symbol.svg#sun"
                alt="light mode"
                className="dark-mode-btn__icon"
              ></use>
            </svg>
            <svg className="icon moon-mobile">
              <use
                href="./img/svgsprite/sprite.symbol.svg#moon"
                alt="dark mode"
                className="dark-mode__btn-icon"
              ></use>
            </svg>
          </button>
          <button className="mobile-btn-wrap mobile-btn-wrap-open">
            <svg className="icon mobile-close">
              <use href="./img/svgsprite/sprite.symbol.svg#mobile-close"></use>
            </svg>
          </button>
        </div>
        <ul className="mobile-nav__list">
          <a href="#!">
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">Новинки</div>
                <svg className="icon star">
                  <use href="./img/svgsprite/sprite.symbol.svg#star"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">Обновления</div>
                <svg className="icon updates-icon">
                  <use href="./img/svgsprite/sprite.symbol.svg#updates-icon"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">Игры года</div>
                <svg className="icon games-year">
                  <use href="./img/svgsprite/sprite.symbol.svg#games-year"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">ТОП 250</div>
                <svg className="icon dice">
                  <use href="./img/svgsprite/sprite.symbol.svg#dice"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">По сети</div>
                <svg className="icon network">
                  <use href="./img/svgsprite/sprite.symbol.svg#network"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-nav-item">
              <div className="nav-item-wrapper mobile-item-wrapper">
                <div className="nav-item-wrapper-name">По годам</div>
                <svg className="icon calendar">
                  <use href="./img/svgsprite/sprite.symbol.svg#calendar"></use>
                </svg>
              </div>
            </div>
          </a>
        </ul>
      </div>
      <div className="wrapper-not-found">
        <div className="img-404">
          <img src={img404} alt="" />
        </div>
        <div className="not-found-wrapper">
          <div className="not-found-head">404 ошибка!</div>
          <div className="not-found-desc">
            Запрашиваемая страница не найдена или не существует.
          </div>
          <button className="not-found-btn">
            <Link to="/">Путник, вернись на главную!</Link>
          </button>
        </div>
      </div>
      <div className="mobile-filter">
        <div className="mobile-btn-top filter-btn-top">
          <button className="main__games-filter mobile-btn-filter-open">
            <svg className="icon mobile-filter-inverse">
              <use href="./img/svgsprite/sprite.symbol.svg#mobile-filter"></use>
            </svg>
          </button>
        </div>

        <ul className="mobile-filter__list">
          <a href="#!">
            <div className="header__top-filter-item">
              <div className="filter-item-wrapper mobile-item-wrapper">
                <div className="filter-item-wrapper-name">По умолчанию</div>
                <svg className="icon filter-arrow-down">
                  <use href="./img/svgsprite/sprite.symbol.svg#arrow-down"></use>
                </svg>
              </div>
            </div>
            <div className="filter-item-selects">
              <div className="filter-item-select">Новые </div>
              <div className="filter-item-select">Новые </div>
              <div className="filter-item-select active">Новые </div>
              <div className="filter-item-select">Новые </div>
              <div className="filter-item-select">Новые </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-filter-item">
              <div className="filter-item-wrapper mobile-item-wrapper">
                <div className="filter-item-wrapper-name">По году</div>
                <svg className="icon filter-arrow-down">
                  <use href="./img/svgsprite/sprite.symbol.svg#arrow-down"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-filter-item">
              <div className="filter-item-wrapper mobile-item-wrapper">
                <div className="filter-item-wrapper-name">Язык</div>
                <svg className="icon filter-arrow-down">
                  <use href="./img/svgsprite/sprite.symbol.svg#arrow-down"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-filter-item">
              <div className="filter-item-wrapper mobile-item-wrapper">
                <div className="filter-item-wrapper-name">Размер</div>
                <svg className="icon filter-arrow-down">
                  <use href="./img/svgsprite/sprite.symbol.svg#arrow-down"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-filter-item">
              <div className="filter-item-wrapper mobile-item-wrapper">
                <div className="filter-item-wrapper-name">Железо</div>
                <svg className="icon filter-arrow-down">
                  <use href="./img/svgsprite/sprite.symbol.svg#arrow-down"></use>
                </svg>
              </div>
            </div>
          </a>
          <a href="#!">
            <div className="header__top-filter-item">
              <div className="filter-item-wrapper mobile-item-wrapper">
                <div className="filter-item-wrapper-name">Рейтинг</div>
                <svg className="icon filter-arrow-down">
                  <use href="./img/svgsprite/sprite.symbol.svg#arrow-down"></use>
                </svg>
              </div>
            </div>
          </a>
        </ul>
      </div>
      <Info />
    </>
  );
}

export default Favorites;
