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
        <main className="ml-64 mt-16 mb-16 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
export default Home;
