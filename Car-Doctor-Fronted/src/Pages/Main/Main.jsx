import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer.jsx";
import NavBar from "../../Component/NavBar.jsx";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;