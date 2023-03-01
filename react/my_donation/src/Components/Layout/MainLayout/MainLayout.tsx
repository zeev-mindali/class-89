import MainRoute from "../../Routes/MainRoute/MainRoute";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <main>
        <MainRoute />
      </main>
    </div>
  );
}

export default MainLayout;
