import React from 'react';
import MenuItems from '../../Components/MenuItems/MenuItems';
import Directory from '../../Components/Directory/Directory';
import "./HomePage.scss";

const Homepage = () => {
    return (
        <div className="homepage">
            <Directory />
                {/* <MenuItems title="HATS" />
                <MenuItems title="JACKETS" />
                <MenuItems title="SNEAKERS" />
                <MenuItems title="WOMEN" />
                <MenuItems title="MEN" /> */}
        </div>
    )
}

export default Homepage
