import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

import gamesYear from "./../assets/img/svgicons/games-year.svg";
import network from "./../assets/img/svgicons/network.svg";
import calendar from "./../assets/img/svgicons/calendar.svg";
import tvseries from "./../assets/img/tv-show.png";
import star from "./../assets/img/svgicons/star.svg";
import Category from "./Category";
import { Link } from "react-router";

const Categories = () => {

  const categories = [
    {
      id: 1,
      name: "Новинки",
      icon: star,
    },
    {
      id: 2,
      name: "Фильмы года",
      icon: calendar,
    },
    {
      id: 3,
      name: "ТОП 250",
      icon: gamesYear,
    },
    {
      id: 4,
      name: "Сериалы",
      icon: tvseries,
    },
    {
      id: 5,
      name: "Зарубежные",
      icon: network,
    },
  ];

  const dispatch = useDispatch();
  const handleClickCategory = (category) => {
    dispatch(setCategoryId(category));
  };

  return (
    <ul className="header__top-nav-list">
      {categories.map((item, index) => (
        <Link
          to={`/`}
          key={item.id}
          onClick={() => handleClickCategory(item.id)}
        >
          <Category key={item.id} {...item} index={index} />
        </Link>
      ))}
    </ul>
  );
};

export default Categories;
