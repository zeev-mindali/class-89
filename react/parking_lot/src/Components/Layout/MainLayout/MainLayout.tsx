import MainRoutes from "../../Routes/MainRoutes/MainRoutes";
import Header from "../Header/Header";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
  return (
    <div className="MainLayout">
      <header>
        <Header />
      </header>
      <main>
        <MainRoutes />
      </main>
    </div>
  );
}

export default MainLayout;
