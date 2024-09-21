import { Outlet } from "react-router-dom";
import SidebarWithCta from "../components/SidebarWithCta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EditProfile from "../components/EditProfile";

const Home = () => {
  return (
    <>
      <div className="dark bg-gray-900 text-gray-300 min-h-screen">
        <Header />
        <EditProfile></EditProfile>
        <div className="flex">
          <SidebarWithCta />
          <main className="mt-16 mb-16 p-4  bg-gray-900 text-gray-300">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
