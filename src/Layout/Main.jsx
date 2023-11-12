import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;