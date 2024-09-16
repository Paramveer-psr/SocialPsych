import { Outlet } from "react-router-dom";
import SidebarWithCta from "../components/SidebarWithCta";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SidebarWithCta />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Home;
