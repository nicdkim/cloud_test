import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    const activateStyle = {
        backgroundColor: "black",
        color: "white"
    };

    return (
        <>
            <ul>
                <li>
                    <NavLink to="/" style={({isActive}) =>
                    isActive ? activateStyle : null
                }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menupage" style={({isActive}) =>
                    isActive ? activateStyle : null
                }>menupage</NavLink>
                </li>
            </ul>
        </>
    )

}

export default Navbar;