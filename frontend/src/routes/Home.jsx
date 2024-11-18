import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; // This should include ChatList
import Header from "../components/Header"; // Optional, for the header bar
import Footer from "../components/Footer"; // Optional, for footer if needed

const Home = () => {
  return (
    <div className="dark bg-gray-900 text-gray-300 min-h-screen ">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="  mt-16 mb-16 p-4 bg-gray-900">
          <Outlet /> {/* This is where the chat window will render */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
// mt-16 mb-16 p-4
