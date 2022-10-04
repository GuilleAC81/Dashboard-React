import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import imgDH from '../assets/images/logo-DH.png';

function SideBar(){

        return (
            <Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={imgDH} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link to="/" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH movies</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link to="/data" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Statistics</span>
                    </Link>
                    {/* "fas fa-fw fa-table" */}
                </li>
                
                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link to="/genres" exact="true" className="nav-link collapsed">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Genres</span>
                        {/* <i className="fas fa-fw fa-folder"></i> */}
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link to="/last" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Last movie in database</span>
                    </Link>
                    {/* "fas fa-fw fa-chart-area" */}
                </li>

                <li className="nav-item">
                    <Link to="/movie" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Movies</span>
                    </Link>
                    {/* "fas fa-fw fa-chart-area" */}
                </li>
                <li className="nav-item">
                    <Link to="/actors" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Actors</span>
                    </Link>
                    {/* "fas fa-fw fa-chart-area" */}
                </li>


                {/* <li className="nav-item">
                    <Link to="/movie/1/likes/10" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Movie 1</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/movie/2/likes/3" exact="true" className="nav-link">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Movie 2</span>
                    </Link>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
        </Fragment>
        //     <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        //     {/* Sidebar - Brand */}
        //     <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        //         <div className="sidebar-brand-icon">
        //             <img className="w-100" src={imgDH} alt="Digital House" />
        //         </div>
        //     </a>
        
        //     {/* Divider */}
        //     <hr className="sidebar-divider my-0" />
        
        //     {/* Nav Item - Dashboard */}
        //     <li className="nav-item active">
        //         <a className="nav-link" href="/">
        //             <i className="fas fa-fw fa-tachometer-alt"></i>
        //             <span>Dashboard - DH movies</span></a>
        //     </li>
        
        //     {/* Divider */}
        //     <hr className="sidebar-divider" />
        
        //     {/* Heading */}
        //     <div className="sidebar-heading">Actions</div>
        
        //     {/* Nav Item - Pages */}
        //     <li className="nav-item">
        //         <a className="nav-link collapsed" href="/">
        //             <i className="fas fa-fw fa-folder"></i>
        //             <span>Pages</span>
        //         </a>
        //     </li>
        
        //     {/* Nav Item - Charts */}
        //     <li className="nav-item">
        //         <a className="nav-link" href="/">
        //             <i className="fas fa-fw fa-chart-area"></i>
        //             <span>Charts</span></a>
        //     </li>
        
        //     {/* Nav Item - Tables */}
        //     <li className="nav-item">
        //         <a className="nav-link" href="/">
        //             <i className="fas fa-fw fa-table"></i>
        //             <span>Tables</span></a>
        //     </li>
        
        //     {/* <!-- Divider --> */}
        //     <hr className="sidebar-divider d-none d-md-block"/>
        // </ul>
        )
        
        }

export default SideBar