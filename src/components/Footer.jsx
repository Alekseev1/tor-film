import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

import changeTheme from "./../utils/changeTheme";

import logo from "./../assets/img/logo.png";
import nightMode from "./../assets/img/svgicons/night-mode.svg";
import youtube from "./../assets/img/svgicons/youtube.svg";
import ticToc from "./../assets/img/svgicons/tic-toc.svg";
import twich from "./../assets/img/svgicons/twich.svg";
import instagram from "./../assets/img/svgicons/instagram.svg";
import x from "./../assets/img/svgicons/x.svg";
import arrowUp from "./../assets/img/svgicons/arrow-up.svg";
import { Link } from "react-router";

const Footer = () => {
  const { themeCurrent } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleThemeChange = () => {
    dispatch(toggleTheme(changeTheme(themeCurrent)));
    localStorage.setItem("theme", themeCurrent === "light" ? "dark" : "light");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__site-info">
            <div className="footer__site-logo">
              <img src={logo} alt="logo" />
              <div className="footer__site-logo-info">
                <div className="footer__site-logo-name">TORFILM</div>
                <div className="footer__site-logo-desc">
                  Большой каталог торрент-фильмов
                </div>
              </div>
            </div>
            <div className="footer__site-copyright">
              Torfilm © 2024. All rights reserved.
            </div>
          </div>
          <div className="footer__category-grid">
            <div className="footer__category-list"></div>
            <div className="footer__category-list">
              <div className="footer__category-title">Топ 5 Фильмов</div>
              <ul>
                <li className="footer__category-item">
                  <a href="/film/36">Властелин колец: Возвращение короля</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/37">Начало</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/34">Интерстеллар</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/35">Остров проклятых</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/86">Большой куш</a>
                </li>
              </ul>
            </div>
            <div className="footer__category-list">
              <div className="footer__category-title">Новинки</div>
              <ul>
                <li className="footer__category-item">
                  <a href="/film/76">Рипли</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/20">Майор Гром: Игра</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/15">Дэдпул и Росомаха</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/18">Сто лет тому вперёд</a>
                </li>
                <li className="footer__category-item">
                  <a href="/film/17">Территория зла</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__soc-list">
          <li className="footer__soc-item">
            <a href="#!">
              <img className="icon youtube" src={youtube} />
            </a>
          </li>
          <li className="footer__soc-item">
            <a href="#!">
              <img className="icon tic-toc" src={ticToc} />
            </a>
          </li>
          <li className="footer__soc-item">
            <a href="#!">
              <img className="icon twich" src={twich} />
            </a>
          </li>
          <li className="footer__soc-item">
            <a href="#!">
              <img className="icon instagram" src={instagram} />
            </a>
          </li>
          <li className="footer__soc-item">
            <a href="#!">
              <img className="icon x" src={x} />
            </a>
          </li>
        </div>
      </div>
      <div className="footer__buttons">
        <div className="footer__scroll-top" onClick={() => handleScroll()}>
          <img className="icon arrow-up" src={arrowUp} alt="arrowUp" />
        </div>
        <div className="footer__night-mode" onClick={() => handleThemeChange()}>
          <img className="icon night-mode" src={nightMode} alt="arrowUp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
