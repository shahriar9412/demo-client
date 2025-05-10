import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner";
const Main = () => {
    return (
        <div>
            <Toaster richColors position="top-right" />
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;