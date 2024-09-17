import Banner from "@/components/Banner";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import List from "@/components/List";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Banner />
      <List />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
