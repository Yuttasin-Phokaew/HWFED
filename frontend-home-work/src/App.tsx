import MainLayout from "./layout/MainLayout"
import { BrowserRouter } from "react-router-dom";
import './components/Home/Home'
import Nav from "./components/Nav/Nav";

function App() {

  return (
    <>
    <Nav />
    <MainLayout />
    </>
  );
}

export default App