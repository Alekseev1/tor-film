import { useState } from "react";
import arrowDownAcc from "./../assets/img/svgicons/arrow-down-accordion.svg";

const Accordion = ({ title, content }) => {
  const [isActiveAcc, setIsActiveAcc] = useState(false);

  return (
    <div
      onClick={() => setIsActiveAcc(!isActiveAcc)}
      className={
        isActiveAcc ? "accordion accordion-1 is-open" : "accordion accordion-1"
      }
    >
      <div className="accordion__control" aria-expanded="false">
        <span className="accordion__title">{title}</span>
        <div className="accordion__icon-wrapper">
          <img
            className="icon arrow-down-accordion accordion__icon"
            src={arrowDownAcc}
            alt="arrow-left"
          />
        </div>
      </div>
      <div className="accordion__content" aria-hidden="true">
        <h3>{content}</h3>
      </div>
    </div>
  );
};

export default Accordion;
