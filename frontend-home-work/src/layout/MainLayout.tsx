// import Card from "../components/Card/Card";
import CardList from "../components/Card/CardList";
import Home from "../components/Home/Home";
import Nav from "../components/Nav/Nav";

function MainLayout() {
  return (
   <section id="main-layout">
    <Nav />
    <Home />
    {/* <Card /> */}
    <CardList />
  </section>
  );
}

export default MainLayout;