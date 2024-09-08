import { Outlet } from "react-router-dom";
import SidebarWithCta from "../components/SidebarWithCta";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <SidebarWithCta></SidebarWithCta>
      <Outlet />
      <Footer />
    </>
  );
};
export default Home;
