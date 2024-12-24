import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { addToFavs, deleteFromFavs } from "../redux/slices/favSlice";

import { setSortGenre } from "../redux/slices/filterSlice";

import { useGetFilmByIdQuery } from "./../redux/filmsApi";

import Accordion from "../UI/Accordion";
import { list, genreNames } from "../assets/list";

import { HashLink } from "react-router-hash-link";

import star from "../assets/img/svgicons/star.svg";
import heartWhite from "../assets/img/heart-white.png";
import kinopoisk from "../assets/img/kinopoisk.jpg";
import heartIcon from "./../assets/img/svgicons/heart_icon.svg";
import downloaded from "./../assets/img/svgicons/downloaded.svg";
import check from "./../assets/img/svgicons/check.svg";
import upd from "./../assets/img/svgicons/upd.svg";
import torrent from "./../assets/img/svgicons/torrent.svg";
import badge from "./../assets/img/svgicons/badge.svg";
import time from "./../assets/img/svgicons/time.svg";
import breadcrumbs from "./../assets/img/svgicons/breadcrumbs.svg";
import like from "./../assets/img/svgicons/like.svg";
import dislike from "./../assets/img/svgicons/dislike.svg";
import answer from "./../assets/img/svgicons/answer.svg";
import commentUser1 from "./../assets/img/game/comment-user1.jpg";
import commentUser2 from "./../assets/img/game/comment-user2.jpg";
import SkeletonFilm from "./../components/Card/SkeletonFilm";
import MobileNav from "../components/mobileNav";

const Film = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favors);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: film, isLoading, isError } = useGetFilmByIdQuery({ id });

  const addFavourite = () => {
    const item = {
      id: film.id,
      imageUrl: film.imageUrl,
      title: film.title,
      year: film.year,
      category: film.category,
      contry: film.contry,
      genre: film.genre,
      rating: film.rating,
    };

    if (!isFavourite) {
      setIsFavourite(true);
      dispatch(addToFavs(item));
    }
    if (isFavourite) {
      {
        setIsFavourite(false);
        dispatch(deleteFromFavs(item));
      }
    }
  };

  useEffect(() => {
    if (items.find((item) => item.id === film?.id)) {
      setIsFavourite(true);
    }
  }, [items, film]);

  const handleClickGenre = (genre) => {
    dispatch(
      setSortGenre({
        index: genreNames.indexOf(genre),
        sort: list[4].sort,
      })
    );
  };

  if (isError) {
    navigate("/404");
  }

  return (
    <>
      <MobileNav />
      <section className="main">
        <div className="container">
          <div className="main-wrapper">
            <div className="game__info">
              <div className="game__info-top">
                <div className="breadcrumbs_wrapper">
                  <Link to="/" className="breadcrumbs__home">
                    <div className="breadcrumbs__home">Главная</div>
                  </Link>
                  <img src={breadcrumbs} className="icon breadcrumbs" alt="" />

                  <div className="breadcrumbs__inner">
                    {isLoading ? "Загрузка..." : film.title}
                  </div>
                </div>
                <div className="updates__card-info-stats game__info-stats">
                  <div className="updates__card-size main__card-size game__info-card-size">
                    1.35 GB
                  </div>
                  <div className="game__card-download">
                    <div className="download-icon">
                      <img className="icon downloaded" src={downloaded} />
                    </div>
                    <div className="updates__card-download-number game__download-number">
                      28 203
                    </div>
                  </div>
                </div>
              </div>
              <div className="game__info-row">
                <div className="game__info-img">
                  {isLoading ? (
                    <SkeletonFilm />
                  ) : (
                    <img src={film.imageUrl} alt="" />
                  )}
                  <button className="game__info-btn" onClick={addFavourite}>
                    <img
                      className="icon heart-white"
                      src={isFavourite ? heartWhite : heartIcon}
                    />

                    <div className="game__info-btn-text">
                      {isFavourite
                        ? "Удалить из избранного"
                        : "Добавить в избранное"}
                    </div>
                  </button>
                </div>
                <div className="game__info-col">
                  <div className="game__info-col-title">
                    {isLoading ? "Загрузка..." : film.title}
                  </div>
                  <div className="game__info-col-version">
                    {isLoading ? "Загрузка..." : film.year}
                  </div>
                  <div className="game__info-col-desc">
                    (Полная версия) Последняя в доп. раздачах
                  </div>
                  <div className="game__info-col-date">
                    <p>
                      <b>Дата выхода: </b>
                      {isLoading ? "Загрузка..." : film.release} г.<br></br>
                      <b>Режиссер: </b>
                      {isLoading ? "Загрузка..." : film.director} <br></br>
                      <b>Жанр:</b>{" "}
                      <span
                        className="film-genre"
                        onClick={() => handleClickGenre(film.genre)}
                      >
                        <HashLink to={`/#anchortag`}>
                          {list[4].arr[genreNames.indexOf(film?.genre)]}
                        </HashLink>
                      </span>
                    </p>
                  </div>
                  <div className="game__info-col-steam">
                    <div className="game-steam-icon">
                      <img src={kinopoisk} className="icon steam" alt="" />
                    </div>
                    <div className="game-steam-text">
                      Отзывы на Кинопоиск:{" "}
                      <span>
                        {(isLoading
                          ? "Загрузка..."
                          : film.rating > 8 && "Крайне положительные") ||
                          (isLoading
                            ? "Загрузка..."
                            : film.rating > 7 && "Положительные") ||
                          (isLoading
                            ? "Загрузка..."
                            : film.rating > 6 && "Средние") ||
                          (isLoading
                            ? "Загрузка..."
                            : film.rating > 6 && "Низкие")}
                      </span>
                    </div>
                  </div>
                  <div className="game__info-col-update">
                    <div className="game-update-icon">
                      <img src={check} className="icon check" />
                    </div>
                    <div className="game-update-text">
                      <b>Обновлено:</b> 13 июля 2024, 17:00.
                    </div>
                  </div>
                  <div className="game-update-text-link"></div>
                  <div className="game__info-col-rate">
                    <div className="game__info-rating">
                      <div className="card__rating-mark game__info-rating-mark">
                        {isLoading
                          ? "Загрузка..."
                          : film.rating
                          ? film.rating
                          : "Ожидается премьера"}
                      </div>
                      <div className="card__rating-stars">
                        {(isLoading
                          ? "Загрузка..."
                          : film.rating > 8 && (
                              <>
                                <img
                                  className="icon star-rating-big"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star-rating-big"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star-rating-big"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star-rating-big"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star-rating-big"
                                  src={star}
                                  alt="star"
                                />
                              </>
                            )) ||
                          (isLoading
                            ? "Загрузка..."
                            : film.rating > 7 && (
                                <>
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                </>
                              )) ||
                          (isLoading
                            ? "Загрузка..."
                            : film.rating > 6 && (
                                <>
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                </>
                              )) ||
                          (isLoading
                            ? "Загрузка..."
                            : film.rating > 6 && (
                                <>
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star-rating-big"
                                    src={star}
                                    alt="star"
                                  />
                                </>
                              ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="game__info-text info__text-light">
                <p>{isLoading ? "Загрузка..." : film.desc}</p>
              </div>
              <button className="game-info-btn">
                <div className="game-info-btn-icon">
                  <img src={torrent} className="icon torrent" alt="" />
                </div>
                <div className="game-info-btn-text">Скачать торрент</div>
              </button>
              <div className="info-accordion">
                <Accordion
                  title="Как загружать файлы?"
                  content="Файлы загруживаются в любую удобную папку, в пути до исполняемого
                    файла игры не должно быть русских букв. "
                />
              </div>
              <div className="game-info__size-row">
                <div className="game-info__size">1.4&nbsp;Гб</div>
                <div className="game-info__btn-wrap">
                  <button className="game-info-btn game-info__size-btn">
                    <div className="game-info-btn-icon">
                      <img src={torrent} className="icon torrent" alt="" />
                    </div>
                    <div className="game-info-btn-text">Скачать .torrent</div>
                  </button>
                  <div className="game-info__btn-var">
                    или <a href="#!">выбрать версию и RePack</a>
                  </div>
                </div>
                <div className="game-info__upd">
                  <div className="game-info__upd-icon">
                    <div className="upd-icon-wrap">
                      <img src={upd} className="icon upd" alt="" />
                    </div>
                  </div>
                  <div className="game-info__upd-text">
                    <span>Публикация обновлена</span>
                    <p>13 июля 2024, 17:00</p>
                  </div>
                </div>
                <div className="game-info__note">
                  <div className="game-info__note-icon">
                    <svg className="icon note">
                      <use href="./img/svgsprite/sprite.symbol.svg#note"></use>
                    </svg>
                  </div>
                  <div className="game-info__note-text">
                    <span>Примечание</span>
                    <p>
                      Более актуальная версия: v 1.0.15{" "}
                      <a href="#!">находится в блоке</a>- Дополнительные
                      раздачи.
                    </p>
                  </div>
                </div>
              </div>
              <div className="game-info-pirat game-info-quality">
                Скачать торрент в хорошем качестве бесплатно
              </div>
              <div className="game-info-table">
                <table className="game-info__table">
                  <tbody>
                    <tr>
                      <th>№</th>
                      <th>Название торрент раздачи</th>
                      <th>Размер</th>
                      <th>Сиды</th>
                      <th>Пиры</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className="game-info__table-name">
                          {isLoading ? "Загрузка..." : film.title}
                        </div>
                        <div className="game-info__table-desc">
                          {isLoading
                            ? "Загрузка..."
                            : film.desc?.slice(0, 100) + "..."}
                        </div>
                      </td>
                      <td>
                        <div className="game-info__table-size">1.35 GB</div>
                      </td>
                      <td>813</td>
                      <td>19</td>
                      <td>
                        <div className="table-btn-wrap">
                          <button className="game-info-btn game-info__size-btn table-btn">
                            <div className="game-info-btn-icon">
                              <img
                                src={torrent}
                                className="icon torrent"
                                alt=""
                              />
                            </div>
                            <div className="game-info-btn-text">Скачать</div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div className="game-info__table-name">
                          {isLoading ? "Загрузка..." : film.title}
                        </div>
                        <div className="game-info__table-desc">
                          {isLoading
                            ? "Загрузка..."
                            : film.desc?.slice(0, 100) + "..."}
                        </div>
                      </td>
                      <td>
                        <div className="game-info__table-size">1.35 GB</div>
                      </td>
                      <td>813</td>
                      <td>19</td>
                      <td>
                        <div className="table-btn-wrap">
                          <button className="game-info-btn game-info__size-btn table-btn">
                            <div className="game-info-btn-icon">
                              <img
                                src={torrent}
                                className="icon torrent"
                                alt=""
                              />
                            </div>
                            <div className="game-info-btn-text">Скачать</div>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div className="game-info__table-name">
                          {isLoading ? "Загрузка..." : film.title}
                        </div>
                        <div className="game-info__table-desc">
                          {isLoading
                            ? "Загрузка..."
                            : film.desc?.slice(0, 100) + "..."}
                        </div>
                      </td>
                      <td>
                        <div className="game-info__table-size">1.35 GB</div>
                      </td>
                      <td>813</td>
                      <td>19</td>
                      <td>
                        <div className="table-btn-wrap">
                          <button className="game-info-btn game-info__size-btn table-btn">
                            <div className="game-info-btn-icon">
                              <img
                                src={torrent}
                                className="icon torrent"
                                alt=""
                              />
                            </div>
                            <div className="game-info-btn-text">Скачать</div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mobile__table-card">
                  <div className="mobile__table-head">
                    <div className="mobile__table-info">
                      <div className="mobile__table-info-name">
                        Rusts Retirement
                      </div>
                      <div className="mobile__table-info-desc">
                        Предлагает игрокам на ходу заняться фермерством
                      </div>
                    </div>
                    <div className="mobile__table-arrow-down">
                      <div className="accordion__icon-wrapper table-icon-wrapper">
                        <svg className="icon arrow-down-table">
                          <use href="./img/svgsprite/sprite.symbol.svg#arrow-down-accordion"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mobile__table-stats">
                    <div className="mobile__table-stats-item">
                      <p>Размер</p>
                      <span>1.35 GB</span>
                    </div>
                    <div className="mobile__table-stats-item">
                      <p>Сиды</p>
                      <span>813</span>
                    </div>
                    <div className="mobile__table-stats-item">
                      <p>Пиры</p>
                      <span>19</span>
                    </div>
                  </div>
                  <div className="mobile__table-btn">
                    <button className="game-info-btn game-info__size-btn table-btn mobile__table-btn">
                      <div className="game-info-btn-icon">
                        <svg className="icon torrent">
                          <use href="./img/svgsprite/sprite.symbol.svg#torrent"></use>
                        </svg>
                      </div>
                      <div className="game-info-btn-text">Скачать</div>
                    </button>
                  </div>
                </div>
                <div className="mobile__table-card">
                  <div className="mobile__table-head">
                    <div className="mobile__table-info">
                      <div className="mobile__table-info-name">
                        Rusts Retirement
                      </div>
                      <div className="mobile__table-info-desc">
                        Предлагает игрокам на ходу заняться фермерством
                      </div>
                    </div>
                    <div className="mobile__table-arrow-down">
                      <div className="accordion__icon-wrapper table-icon-wrapper">
                        <svg className="icon arrow-down-table">
                          <use href="./img/svgsprite/sprite.symbol.svg#arrow-down-accordion"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mobile__table-stats">
                    <div className="mobile__table-stats-item">
                      <p>Размер</p>
                      <span>1.35 GB</span>
                    </div>
                    <div className="mobile__table-stats-item">
                      <p>Сиды</p>
                      <span>813</span>
                    </div>
                    <div className="mobile__table-stats-item">
                      <p>Пиры</p>
                      <span>19</span>
                    </div>
                  </div>
                  <div className="mobile__table-btn">
                    <button className="game-info-btn game-info__size-btn table-btn mobile__table-btn">
                      <div className="game-info-btn-icon">
                        <svg className="icon torrent">
                          <use href="./img/svgsprite/sprite.symbol.svg#torrent"></use>
                        </svg>
                      </div>
                      <div className="game-info-btn-text">Скачать</div>
                    </button>
                  </div>
                </div>
                <div className="mobile__table-card">
                  <div className="mobile__table-head">
                    <div className="mobile__table-info">
                      <div className="mobile__table-info-name">
                        Rusts Retirement
                      </div>
                      <div className="mobile__table-info-desc">
                        Предлагает игрокам на ходу заняться фермерством
                      </div>
                    </div>
                    <div className="mobile__table-arrow-down">
                      <div className="accordion__icon-wrapper table-icon-wrapper">
                        <svg className="icon arrow-down-table">
                          <use href="./img/svgsprite/sprite.symbol.svg#arrow-down-accordion"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mobile__table-stats">
                    <div className="mobile__table-stats-item">
                      <p>Размер</p>
                      <span>1.35 GB</span>
                    </div>
                    <div className="mobile__table-stats-item">
                      <p>Сиды</p>
                      <span>813</span>
                    </div>
                    <div className="mobile__table-stats-item">
                      <p>Пиры</p>
                      <span>19</span>
                    </div>
                  </div>
                  <div className="mobile__table-btn">
                    <button className="game-info-btn game-info__size-btn table-btn mobile__table-btn">
                      <div className="game-info-btn-icon">
                        <svg className="icon torrent">
                          <use href="./img/svgsprite/sprite.symbol.svg#torrent"></use>
                        </svg>
                      </div>
                      <div className="game-info-btn-text">Скачать</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="game-info-requirements">
                <div className="game-info-requirements-col">
                  <div className="game-info-pirat game-info-quality">
                    Информация
                  </div>
                  <div className="game-info-requirements-wrap">
                    <div className="game__info-col-date">
                      <p>
                        <b>Дата выхода: </b> {isLoading ? "..." : film.release}{" "}
                        г. г.<br></br>
                        <b>Режиссер: </b> {isLoading ? "..." : film.director}
                        <br></br>
                        <b>Жанр: </b>
                        <span>
                          <a href="#!">
                            {list[4].arr[genreNames.indexOf(film?.genre)]}
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="game__info-col-date">
                      <p>
                        <b>Озвучка:</b> Русская / Английская<br></br>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="game-info-pirat game-info-quality">
                Информация о поддержке
              </div>
              <div className="game__info-col-date game__info-support">
                <p>
                  <b>
                    <a href="#!">
                      {" "}
                      <span>Решение проблем с установкой</span>
                    </a>
                  </b>
                  <br></br>
                  <b>
                    <a href="#!">
                      <span>Не скачивается торрент?</span>
                    </a>
                  </b>
                  <br></br>
                </p>
              </div>
              <div className="game__info-tags">
                <img src={badge} className="icon badge" alt="" />
                <div className="game__info-tag">
                  {list[4].arr[genreNames.indexOf(film?.genre)]}
                </div>
                <div className="game__info-tag">
                  {isLoading ? "..." : film.year}
                </div>
              </div>
              <div className="game-info-title title-2 title-comments">
                Комментарии
              </div>
              <div className="game__form">
                <div className="game__form-input">
                  <input
                    type="text"
                    className="game__form-input-name"
                    placeholder="Ваше имя"
                  />
                </div>
                <div className="game__form-input">
                  <textarea
                    type="text"
                    className="game__form-input-comment"
                    placeholder="Ваш комментарий"
                  ></textarea>
                </div>
                <button className="game__form-btn" type="submit">
                  Отправить
                </button>
              </div>
              <div className="game__comment">
                <div className="game__comment-top">
                  <div className="comment-top-user-wrap">
                    <div className="comment-top-user-img">
                      <img src={commentUser1} alt="" />
                    </div>
                    <div className="comment-top-user-info">
                      <div className="comment-top-user-name">user</div>
                      <div className="comment-top-user-team">Команда</div>
                    </div>
                  </div>
                  <div className="comment-top-data-wrap">
                    <div className="comment-top-data-icon">
                      <img src={time} className="icon time" alt="" />
                    </div>
                    <div className="comment-top-data-time">
                      13 июля 2024, 17:00
                    </div>
                  </div>
                </div>
                <div className="game__comment-text">
                  {isLoading ? "" : film.desc}
                </div>
                <div className="game__comment-bottom">
                  <div className="game__comment-likes">
                    <div className="game__comment-like-wrap">
                      <div className="game__comment-like-text">Рекомендую</div>
                      <div className="game__comment-like-icon">
                        <img src={like} className="icon like" alt="" />
                      </div>
                    </div>
                    <div className="game__comment-dislike-wrap">
                      <div className="game__comment-dislike-text">
                        Не рекомендую
                      </div>
                      <div className="game__comment-dislike-icon">
                        <img src={dislike} className="icon dislike" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="game__comment-answer">
                    <div className="game__comment-answer-icon">
                      <img src={answer} className="icon answer" alt="" />
                    </div>
                    <div className="game__comment-answer-text">Ответить</div>
                  </div>
                </div>
              </div>
              <div className="game__comment game__comment-second">
                <div className="game__comment-top">
                  <div className="comment-top-user-wrap">
                    <div className="comment-top-user-img">
                      <img src={commentUser2} alt="" />
                    </div>
                    <div className="comment-top-user-info">
                      <div className="comment-top-user-name">moder_torfilm</div>
                      <div className="comment-top-user-team">Команда</div>
                    </div>
                  </div>
                  <div className="comment-top-data-wrap">
                    <div className="comment-top-data-icon">
                      <img src={time} className="icon time" alt="" />
                    </div>
                    <div className="comment-top-data-time">
                      13 июля 2024, 17:00
                    </div>
                  </div>
                </div>
                <div className="game__comment-text">
                  {isLoading ? "" : film.desc}
                </div>
                <div className="game__comment-bottom">
                  <div className="game__comment-likes">
                    <div className="game__comment-like-wrap">
                      <div className="game__comment-like-text">Рекомендую</div>
                      <div className="game__comment-like-icon">
                        <img src={like} className="icon like" alt="" />
                      </div>
                    </div>
                    <div className="game__comment-dislike-wrap">
                      <div className="game__comment-dislike-text">
                        Не рекомендую
                      </div>
                      <div className="game__comment-dislike-icon">
                        <img src={dislike} className="icon dislike" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="game__comment-answer">
                    <div className="game__comment-answer-icon">
                      <img src={answer} className="icon answer" alt="" />
                    </div>
                    <div className="game__comment-answer-text">Ответить</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
};

export default Film;
