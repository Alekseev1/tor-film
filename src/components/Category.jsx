import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const Category = ({ name, icon, id, index }) => {
  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(setCategoryId(id))}>
      <div className="header__top-nav-item">
        <div className="nav-item-wrapper">
          <img className="icon" src={icon} alt="star" />
          <div
            className={
              categoryId === index + 1
                ? "nav-item-wrapper-name active"
                : "nav-item-wrapper-name"
            }
          >
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
