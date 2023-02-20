import AdminMenu from "./AdminMenu/AdminMenu";
import "./Menu.css";
import RegularMenu from "./RegularMenu/RegularMenu";

function Menu(): JSX.Element {
    const isAdmin=true;
    return (
        <div className="Menu">
            <h1>Menu</h1><hr/>
			<RegularMenu/>
            <hr/>
            {isAdmin && <AdminMenu/>}
        </div>
    );
}

export default Menu;
