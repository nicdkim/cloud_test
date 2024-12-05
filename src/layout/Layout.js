import Header from "../component/Header"
import Navbar from "../component/Navbar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
};

export default Layout;