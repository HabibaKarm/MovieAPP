import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function Nav() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand brand new-amsterdam-regular" to={"/"}>
                        Movie<span className='maven'>Maven</span>
                    </Link>
                    <div class="seperator">
                        <p className='caption text-uppercase'>
                            For movies and series
                        </p>
                    </div>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse navigation" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link navlink " aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink" to={"/nowPlaying"}>Now Playing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink" to={"/Popular"}>Popular</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink" to={"/TopRate"}>Top Rated
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link navlink" to={"/UpComing"}>Upcoming
                                </Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link className="nav-link navlink" to={"/search"}><i class="fa-solid fa-magnifying-glass"></i>
                                </Link>
                            </li>



                        </ul>
                        

                        {/* <form className="d-flex" role="search">
                            <input type="text" id="search-input" className="me-2 inputsearch" placeholder="Search" aria-label="Search" />
                        </form> */}
                    </div>
                </div>
            </nav>

        </div>
    )
}
