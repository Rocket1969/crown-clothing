import { Outlet } from "react-router-dom";

import CateogryDirectory from "../../components/category-directory/Category-Directory.component";

const Home = () => {
  return (
    <>
      <CateogryDirectory />
      <Outlet />
    </>
  );
};

export default Home;
