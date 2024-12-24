import { useState } from "react";
import Mainsection from "./../components/Mainsection";
import Breadcrumbs from "./../components/Breadcrumbs";
import MobileNav from "../components/mobileNav";

function Favorites() {
  const title = "Избранное";
  const [hide] = useState(true);

  return (
    <>
      <Breadcrumbs title={title} />
      <MobileNav />
      <Mainsection title="Избранное" hide={hide} />
    </>
  );
}

export default Favorites;
