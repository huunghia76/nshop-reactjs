import { useEffect } from "react";
import "../../assets/css/styleFooter.css";
import { Link } from "react-router-dom";
import SocialNetwork from "./../SocialNetwork";
import Background from "../../assets/image/bg-img3.jpg";
function Footer() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    setInterval(function () {
        //lặp lại
        // 500 là tọa độ tính từ nút khi lăng xuống
        if (window.pageYOffset < 500) {
            document.getElementById("content").style.display = "none";
        } else {
            document.getElementById("content").style.display = "block";
        }
    }, 200);

    useEffect(() => { });
    return (
        <>
            <footer
                className="bg-dark text-white position-relative"
                style={{ background: "url(" + Background + ")" ,zIndex:"9"}}
            >
                <div
                    style={{
                        backgroundColor: "rgb(0, 0, 0)",
                        opacity: "0.6",
                        width: "100%",
                        height: "100%",
                    }}
                    className="position-absolute "
                ></div>
                <div className="bg-" style={{ zIndex: "9999", position: "relative" }}>
                    <div
                        id="nshop_footer"
                        className="container border border-end-0 border-start-0 pt-5 "
                    >
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4  ">
                            <div className="">
                                <h1 className="fw-bold">NSHOP</h1>
                                <p>
                                    Signup to be the first to hear about exclusive deals, special
                                    offers and upcoming collections.
                                </p>
                                <p>111 Wall Stree, USA, New York</p>
                                <p>(+84) 0123456789</p>
                            </div>
                            <div>
                                <b>Information</b>
                                <ul>
                                    <li>
                                        <Link className="nav-link text-white" to="#">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to="#">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to="">
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to="">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <b>Categories</b>
                                <ul>
                                    <li>
                                        <Link className="nav-link text-white" to="">
                                            Accessories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to="">
                                            Man
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to="">
                                            Women
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="nav-link text-white" to="">
                                            Kids
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="px-0 ">
                                <b>Newsletter</b>
                                <p>
                                    Get Tethys. and discover streamlined website construction
                                    today!
                                </p>
                                <div className="d-flex">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="input-ft  w-75 border "
                                    />
                                    <button className=" w-2 btn btn-success ps-1">Sign up</button>
                                </div>
                                <div className="text-center text-md-start ">
                                    <SocialNetwork></SocialNetwork>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid ">
                        <div className="row py-2  px-0 px-md-5">
                            <div className="text-black-50  col col-12 col-lg-6 align-self-center text-center text-md-start text-white-50">
                                NSHOP<b>©</b>2022 Create by Hoang Huu Nghia
                            </div>
                            <div className="col col-12 col-lg-6  justify-content-center justify-content-lg-end d-none d-md-flex">
                                <nav className="d-flex align-items-center py-2 ">
                                    <li className="px-0 px-md-2 my-0">
                                        <Link to="#" className="text-black fw-bold text-white-50">
                                            Contact Us
                                        </Link>{" "}
                                    </li>
                                    <li className="px-0 px-md-2 my-0">
                                        <Link to="#" className="text-black fw-bold text-white-50">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="px-0 px-md-2 my-0">
                                        <Link to="#" className="text-black fw-bold text-white-50">
                                            Terms and Conditions
                                        </Link>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* <div className=" bottom-0 top-0 end-0"> */}
                    <button
                        onClick={scrollToTop}
                        id="content"
                        className="border border-0 text-success position-fixed bottom-0 end-0  "
                        style={{ backgroundColor: "rgba(0,0,0,0)" }}
                    >
                        <i className="fa-solid fa-circle-up fs-1 p-2 bg-opacity-10 "></i>
                    </button>
                    {/* </div> */}
                </div>
            </footer>
        </>
    );
}
export default Footer;
