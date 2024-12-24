import star from "./../assets/img/svgicons/star.svg";
import userImg from "./../assets/img/main/user-img1.jpg";
import arrowDown from "./../assets/img/svgicons/arrow-down.svg";
import { list } from "./../assets/list";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setSort2,
  setSortGenre,
} from "../redux/slices/filterSlice";
import { Link } from "react-router";

const SortSidebar = ({ dataUpdates, isLoadingUpdates }) => {
  const { selectSort2, selectSortGenre } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onChangeListItem = (index) => {
    dispatch(setSort2(index));
  };

  let dataUpdateSubset = dataUpdates && dataUpdates.slice(1, 15);

  const handlebutton = () => {
    dispatch(setCategoryId(1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="main-sort">
      <div className="sort-genre">
        <div className="sort-genre-title">ПО ЖАНРУ</div>
        <ul className="sort-genre-list">
          {list[4].arr.map((el, index) => (
            <li
              key={index}
              className={
                selectSortGenre.index === index
                  ? "sort-genre-item active"
                  : "sort-genre-item"
              }
              onClick={() =>
                dispatch(setSortGenre({ index: index, sort: list[4].sort }))
              }
            >
              <img
                className="icon arrow-right-min"
                src={arrowDown}
                alt="arrow-down"
              />
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="sort-year">
        <div className="sort-year-title">ПО ГОДУ </div>
        <div className="sort-year-grid">
          {list[1].arr.map((el, index) => (
            <li
              key={index}
              className={
                selectSort2.index === index
                  ? "sort-year-item active"
                  : "sort-year-item"
              }
              onClick={() =>
                onChangeListItem({ index: index, sort: list[1].sort })
              }
            >
              {el}
            </li>
          ))}
        </div>
      </div>
      <div className="sort-updates">
        <div className="sort-updates-title">Новинки</div>
        <div className="sort-popular-wrapper sort-updates-wrapper">
          <div className="sort-popular-card">
            {isLoadingUpdates ? (
              <div className="updates__loading">Загрузка...</div>
            ) : (
              dataUpdateSubset.map((el, index) => (
                <Link to={`/film/${el.id}`} key={index}>
                  <div key={index} className="popular-card-wrapper">
                    <div className="popular-card-img">
                      <img src={el.imageUrl} />
                    </div>
                    <div className="popular-card-info">
                      <div className="popular-card-name">{el.title}</div>
                      <div className="popular-card-rate">
                        <div className="popular-card__rating">
                          <div className="popular-card__rating-mark">
                            {el.rating}
                          </div>
                          <div className="card__rating-stars">
                            {(el.rating > 8 && (
                              <>
                                <img
                                  className="icon star"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star"
                                  src={star}
                                  alt="star"
                                />
                                <img
                                  className="icon star"
                                  src={star}
                                  alt="star"
                                />
                              </>
                            )) ||
                              (el.rating > 7 && (
                                <>
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                </>
                              )) ||
                              (el.rating > 6 && (
                                <>
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                </>
                              )) ||
                              (el.rating > 6 && (
                                <>
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
                                    src={star}
                                    alt="star"
                                  />
                                  <img
                                    className="icon star"
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
                </Link>
              ))
            )}
          </div>
        </div>
        <div className="show-all-btn" onClick={() => handlebutton()}>
          <div className="show-all-btn-text">Посмотреть все</div>
        </div>
      </div>
      <div className="sort-comments">
        <div className="sort-comments-title">Комментируют</div>
        <div className="sort-popular-wrapper sort-comments-wrapper">
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
          <div className="sort-comments-card">
            <div className="comments-card-user">
              <div className="comments-card-user-img">
                <img src={userImg} alt="" />
              </div>
              <div className="comments-card-user-info">
                <div className="comments-card-user-name">Moder_rutor</div>
                <div className="comments-card-user-desc">
                  <div className="comments-card-user-game">Diablo 3</div>
                  <div className="comments-card-user-time">1 час назад</div>
                </div>
              </div>
            </div>
            <div className="comments-card-user-text">
              Используйте VPN. Ссылка на скрин с паролем от архива.
            </div>
          </div>
        </div>
        <div className="show-all-btn">
          <div className="show-all-btn-text">Посмотреть все</div>
        </div>
      </div>
    </div>
  );
};

export default SortSidebar;
