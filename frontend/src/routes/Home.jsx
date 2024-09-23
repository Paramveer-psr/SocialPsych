import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="dark bg-gray-900 text-gray-300 min-h-screen">
        <Header />

        <div className="flex">
          <Sidebar />
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
