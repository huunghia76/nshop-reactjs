import { Link } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/styleHeader.css";
import {
    handleClickCloseCart,
    handleClickOpenCart,
    NavLink,
} from "./handle.js";
function Header() {
    return (
        <div id="nshop_header" className="container-fluid p-0 sticky-top">
            <div className="row mx-0 bg-light ">
                <div className="col col-9 col-sm-10 col-xl-11 p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid pe-0">
                            <Link className="navbar-brand fs-2 fw-bold" to="/">
                                NShop
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/shop">
                                            Shop
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/blog">
                                            Blog
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/contact">
                                            Contacts
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link " to="/about">
                                            About
                                        </NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button className="btn btn-outline-success" type="submit">
                                        Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col col-3 col-sm-2 col-xl-1 pe-0 ps-3 pt-4 ">
                    <Link to="#">
                        <i className="fa-solid fa-user fs-4  text-black"></i>
                    </Link>
                    <Link to="#" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="fa-solid fa-cart-shopping px-3 fs-4 text-black"></i>
                        {/* Giỏ hàng */}
                    </Link>

                    <div className="offcanvas offcanvas-end" style={{zIndex:"999999"}} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="row my-4">
                                <div className="col-3">
                                    <img
                                        src={require("../../assets/image/about/avt.jpg")}
                                        className="img-fluid p-0"
                                        alt=""
                                    />
                                </div>
                                <div className="col-8">
                                    <p className="p-0">Casual red shirt - Green, M</p>
                                    <span className="border border-2 border-dark w-50 text-center">
                                        <span className="px-3 fs-3 ">-</span>1
                                        <span className="px-3 fs-3">+</span>
                                    </span>
                                </div>
                                <div className="col-1 px-0">
                                    <button>X</button>
                                </div>
                            </div>
                            <div className="position-absolute bottom-0 w-100 mb-5">
                                <div className="row d-flex justify-content-center mb-4">
                                    <Link
                                        to="/cart"
                                        className="btn btn-outline-info text-black px-0 w-50"
                                    >
                                        View Cart
                                    </Link>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <Link
                                        to="#"
                                        className="btn btn-outline-dark btn-warning px-0 w-50"
                                    >
                                        Check out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
