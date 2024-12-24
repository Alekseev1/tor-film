import mobileFilterSvg from "./../assets/img/svgicons/mobile-filter.svg";
import MainSort from "./MainSort";
import MainFilms from "./MainFilms";
import SortSidebar from "./SortSidebar";

import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../redux/slices/mobileNav";

const Mainsection = ({
  data,
  showMoreRef,
  isLoading,
  title,
  hide,
  dataUpdates,
  isLoadingUpdates,
}) => {
  const dispatch = useDispatch();
  const { mobileFilter } = useSelector((state) => state.mobileNav);
  const handleMobileFilter = () => {
    dispatch(toggleFilter(!mobileFilter));
    document.body.classList.toggle("no-scroll");
  };

  return (
    <section id="anchortag" className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="main__games">
            <div className="main__games-head">
              <div className="main-title title-2">{title}</div>
              {!hide && (
                <button
                  className="main__games-filter"
                  onClick={handleMobileFilter}
                >
                  <img
                    className="icon mobile-filter-svg"
                    src={mobileFilterSvg}
                    alt="arrow-left"
                  />
                </button>
              )}
              <MainSort hide={hide} />
            </div>
            <MainFilms
              data={data}
              showMoreRef={showMoreRef}
              isLoading={isLoading}
            />
          </div>
          {!hide && (
            <SortSidebar
              dataUpdates={dataUpdates}
              isLoadingUpdates={isLoadingUpdates}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Mainsection;
