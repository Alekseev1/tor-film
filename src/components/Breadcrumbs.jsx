import breadcrumbs from "./../assets/img/svgicons/breadcrumbs.svg";
import { Link } from "react-router";

const Breadcrumbs = ({ title }) => {
  return (
    <div className="container">
      <div className="breadcrumbs_wrapper">
        <Link to="/" className="breadcrumbs__home">
          Главная
        </Link>
        <img className="icon breadcrumbs" src={breadcrumbs} alt="breadcrumbs" />

       
        <div className="breadcrumbs__inner">{title}</div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
