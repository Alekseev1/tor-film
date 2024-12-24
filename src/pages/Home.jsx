import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import qs from "qs";
import { useNavigate } from "react-router";

import { setFilters } from "./../redux/slices/filterSlice";
import { useGetFilmsQuery, useGetFilmsUpdatesQuery } from "./../redux/filmsApi";

import Info from "./../components/Info";
import Mainsection from "./../components/Mainsection";
import Updates from "./../components/Updates";

import { list } from "./../assets/list";
import { genreNames } from "./../assets/list";

import MobileNav from "../components/mobileNav";
import MobileFilter from "../components/MobileFilter";

const Home = () => {
  const { isSearchStatus, searchValue } = useSelector((state) => state.search);

  const {
    categoryId,
    selectSort1,
    selectSort2,
    selectSort3,
    selectSort4,
    selectSortGenre,
  } = useSelector((state) => state.filter);

  const { isClicked } = useSelector((state) => state.mobileNav);

  const sortBy = selectSort1.sort
    ? selectSort1.sort
    : selectSort4.sort
    ? selectSort4.sort
    : "";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const order = selectSort1.sort
    ? list[0].order[selectSort1.index]
    : selectSort4.sort
    ? list[3].order[selectSort4.index]
    : "";
  const year = selectSort2.sort
    ? `&year=${list[1].arr[selectSort2.index]}`
    : "";
  const country = selectSort3.sort
    ? `&contry=${list[2].translate[selectSort3.index]}`
    : "";
  const genre = selectSortGenre.sort
    ? `&genre=${genreNames[selectSortGenre.index]}`
    : "";
  const search = isSearchStatus && searchValue ? searchValue : "";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showMoreRef = useRef(null);
  const isParams = useRef(false);
  const isMounted = useRef(false);

  const { data, error, isLoading } = useGetFilmsQuery({
    category,
    search,
    sortBy,
    order,
    year,
    country,
    genre,
  });

  const { data: dataUpdatesApi, isLoading: isLoadingUpdatesApi } =
    useGetFilmsUpdatesQuery();

  // Запись queryString в url
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        category: categoryId,
        sortBy: selectSort1.sort || selectSort4.sort,
        order: selectSort1.sort ? list[0].order[selectSort1.index] : "",
        year: selectSort2.sort ? `${list[1].arr[selectSort2.index]}` : "",
        country: selectSort3.sort
          ? `${list[2].translate[selectSort3.index]}`
          : "",
        genre: selectSortGenre.sort
          ? `${genreNames[selectSortGenre.index]}`
          : "",
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [
    categoryId,
    selectSort1,
    selectSort2,
    selectSort3,
    selectSort4,
    selectSortGenre,
  ]);

  //   // Парсинг params из url
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.slice(1));
      dispatch(
        setFilters({
          categoryId: Number(params.categoryId) || 0,
          selectSort1: {
            index: 0,
            sort: params.sortBy,
          },
          selectSort2: {
            index: list[1].arr.indexOf(params.year),
            sort: params.year,
          },
          selectSort3: {
            index: list[2].translate.indexOf(params.country),
            sort: params.country,
          },
          selectSort4: {
            index: list[3].arr.indexOf(params.rating),
            sort: params.rating,
          },
          selectSortGenre: {
            index: genreNames.indexOf(params.genre),
            sort: params.genre,
          },
        })
      );
      isParams.current = true;
    }
  }, []);

  // Показать + 5 карточек
  useEffect(() => {
    const cardsLenght = data?.length;
    let items = 30;

    if (showMoreRef.current) {
      showMoreRef.current.addEventListener("click", () => {
        items += 5;
        const arr = Array.from(
          document.querySelector(".main__cards-list").children
        );
        const visItems = arr.slice(0, items);
        visItems.forEach((el) => el.classList.add("visible"));
        if (visItems.length === cardsLenght) {
          showMoreRef.current.style.display = "none";
        }
      });
      if (cardsLenght < 20) {
        showMoreRef.current.style.display = "none";
      }
    }

    return () => {
      if (showMoreRef.current) {
        showMoreRef.current.removeEventListener("click", () => {});
      }
    };
  }, [data]);

  return (
    <>
      <MobileNav />
      {!categoryId && !searchValue && !isClicked && (
        <Updates
          dataUpdates={dataUpdatesApi}
          isLoadingUpdates={isLoadingUpdatesApi}
        />
      )}
      <Mainsection
        title="Фильмы торрент"
        data={data}
        showMoreRef={showMoreRef}
        isLoading={isLoading}
        dataUpdates={dataUpdatesApi}
        isLoadingUpdates={isLoadingUpdatesApi}
      />
      <MobileFilter />
      <Info />
    </>
  );
};

export default Home;
