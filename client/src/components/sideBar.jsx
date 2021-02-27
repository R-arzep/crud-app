import React from 'react'

const SideBar = (props) => 
{
    const sideBar = 
    <div className="row-start-2 row-span-2">
        <div>
            <a href="#">
                <h3>Discover</h3>
            </a>
            <a href="#">
                <h3>Home</h3>
            </a>
            <a href="#">
                <h3>Browse</h3>
            </a>
            <a href="#">
                <h3>Recommendations</h3>
            </a>
        </div>
        <div>
            <a href="#">
                <h3>Library</h3>
            </a>
            <a href="#">
                <h3>My Follows</h3>
            </a>
            <a href="#">
                <h3>My Favorites</h3>
            </a>
            <a href="#">
                <h3>My Recipes</h3>
            </a>
        </div>
    </div>;
    return sideBar;
}
export default SideBar;