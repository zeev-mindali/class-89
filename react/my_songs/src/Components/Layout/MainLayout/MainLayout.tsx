import MainRouting from "../../Routing/MainRouting/MainRouting";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <aside>
        <Categories />
      </aside>
      <main>
        <MainRouting />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
