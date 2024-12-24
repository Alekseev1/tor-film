import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToFavs, deleteFromFavs } from "../../redux/slices/favSlice";

import { genreNames, list } from "./../../assets/list";

import star from "./../../assets/img/svgicons/star.svg";
import downloaded from "./../../assets/img/svgicons/downloaded.svg";
import heart from "./../../assets/img/svgicons/heart.svg";
import heartIcon from "./../../assets/img/svgicons/heart_icon.svg";
import { Link } from "react-router";
import { useLocation } from "react-router";

const Card = ({
  id,
  imageUrl,
  title,
  year,
  category,
  contry,
  genre,
  rating,
  badge,
}) => {
  const contryNames = {
    ru: "Россия",
    en: "США",
  };

  const [hover, setHover] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.favors);

  const starRef = useRef(null);
  const cardimgRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleClickStar = () => {
    const item = {
      id: id,
      imageUrl: imageUrl,
      title: title,
      year: year,
      category: category,
      contry: contry,
      genre: genre,
      rating: rating,
    };

    if (!isFavourite && location.pathname !== "/favorites") {
      setIsFavourite(true);
      dispatch(addToFavs(item));
      cardimgRef.current.classList.add("clicked");
    }
    if (isFavourite) {
      {
        setIsFavourite(false);
        dispatch(deleteFromFavs(item));
        cardimgRef.current.classList.remove("clicked");
      }
    }
  };

  useEffect(() => {
    if (items.find((item) => item.id === id)) {
      setIsFavourite(true);
    }
  }, [items]);

  return (
    <div className="updates__card main__card">
      <div
        ref={starRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClickStar}
        className="heart_icon-wrapper"
      >
        <img
          className="icon heart_icon"
          src={hover || isFavourite ? heart : heartIcon}
          alt="heart"
        />
      </div>

      <Link to={`/film/${id}`} key={id + "updates"}>
        <div className="updates__card-img-wrapper" ref={cardimgRef}>
          {badge === "discount" && (
            <div className="card__badge card__badge--discount">Скидка</div>
          )}
          {badge === "new" && (
            <div className="card__badge card__badge--new">New</div>
          )}
          {badge === "percent" && (
            <div className="card__badge card__badge--percent">-20%</div>
          )}
          <img className="updates__card-img" src={imageUrl} alt="" />

          <div className="updates__card-download-wrapper">
            <div className="download-icon">
              <img
                className="icon downloaded"
                src={downloaded}
                alt="downloaded"
              />
            </div>
            <div className="download-text">Перейти</div>
          </div>
          <div className="updates__card-favorite-wrapper">
            <div className="download-text">В избранном</div>
          </div>

          <div className="card__rating">
            <div className="card__rating-mark">{rating > 0 && rating}</div>
            <div className="card__rating-stars">
              {(rating > 8 && (
                <>
                  <img className="icon star" src={star} alt="star" />
                  <img className="icon star" src={star} alt="star" />
                  <img className="icon star" src={star} alt="star" />
                  <img className="icon star" src={star} alt="star" />
                  <img className="icon star" src={star} alt="star" />
                </>
              )) ||
                (rating > 7 && (
                  <>
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                  </>
                )) ||
                (rating > 6 && (
                  <>
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                  </>
                )) ||
                (rating > 6 && (
                  <>
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                    <img className="icon star" src={star} alt="star" />
                  </>
                ))}
            </div>
          </div>
        </div>
      </Link>
      <Link to={`/film/${id}`} key={id}>
        <div className="updates__card-info">
          <div className="updates__card-info-title main__card-info-title">
            {title}
          </div>
          <div className="updates__card-upload-row">
            <div className="updates__card-upload-time">
              {list[4].arr[genreNames.indexOf(genre)]}
            </div>
            <div className="updates__card-upload-text">
              {contryNames[contry]}
            </div>
          </div>
          <div className="updates__card-info-stats">
            <div className="updates__card-size main__card-size">{year}</div>
            <div className="updates__card-download">
              <div className="download-icon">
                <img
                  className="icon downloaded"
                  src={downloaded}
                  alt="downloaded"
                />
              </div>
              <div className="updates__card-download-number">28 203</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
