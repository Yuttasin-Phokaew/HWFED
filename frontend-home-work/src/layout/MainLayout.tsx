import { Route } from "react-router-dom";
import CardList from "../components/Card/CardList";
import Home from "../components/Home/Home";
import Nav from "../components/Nav/Nav";
// import Signin from "../components/Signin/Signin";

function MainLayout() {
  return (
    <section id="main-layout">
      <Nav />
        <Home />
        <CardList />
    </section>
  );
}

export default MainLayout;

