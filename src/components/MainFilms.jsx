import Card from "./Card";

import { useSelector } from "react-redux";

import showMore from "./../assets/img/svgicons/show-more.svg";
import Skeleton from "./Card/Skeleton";
import favEmpty from "../assets/img/favorites/fav-empty.svg";

const MainFilms = ({ data, showMoreRef, isLoading }) => {
  const { items } = useSelector((state) => state.favors);

  const itemsFilms = data?.map((el) => <Card {...el} key={el.id} />);
  const itemsFav = items?.map((el) => <Card {...el} key={el.id} />);

  const skeletons = [...Array(20)].map((el, index) => <Skeleton key={index} />);

  return (
    <div className="main-games-wrapper">
      <div className="updates__cards">
        <div className="updates__cards-list main__cards-list">
          {isLoading ? skeletons : itemsFilms}
        </div>
      </div>
      {!data && items.length > 0 && (
        <div className="updates__cards">
          <div className="updates__cards-list main__cards-list">
            {isLoading ? skeletons : itemsFav}
          </div>
        </div>
      )}
      {!data && items.length === 0 && (
        <div className="favorite-empty-wrapper">
          <div className="favorite-empty-img">
            <img src={favEmpty} alt="" />
          </div>
          <div className="favorite-empty-title">Ваш список избранного пуст</div>
          <div className="favorite-empty-info">
            Добавьте торренты чтобы скачать их потом!
          </div>
        </div>
      )}
      {!isLoading && data && (
        <button ref={showMoreRef} className="show-more-btn">
          <div className="show-more-btn-text">Показать еще</div>
          <div className="show-more-btn-icon">
            <img className="icon show-more" src={showMore} alt="show-more" />
          </div>
        </button>
      )}
    </div>
  );
};

export default MainFilms;
