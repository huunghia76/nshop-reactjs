import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/styleHome.css";
import Footer from "../component/defaultLayout/Footer";
import Header from "../component/defaultLayout/Header";
import ListProducts from "../component/product/ListProducts";
import ListCategory from './../component/product/ListCategory';
import TabsProducts from './../component/product/TabsProduct';
import Slider from './../component/Slider';
const Home = () => {
    return (
        <>
            {/* <Header></Header> */}
            {/* Panner home shop  */}
            <div className="container-fluid p-0 m-0 bg-pink">
                <div className="row p-0 m-0">
                    <div className="col-3 col-lg-5 d-none d-lg-block ">
                        <img
                            src={require("../assets/image/panner1-removebg-preview.png")}
                            className="img-fluid h-100 w-100 "
                            alt=""
                        />
                    </div>
                    <div className="col-7 col-lg-4 d-flex align-items-center ">
                        <div className="card border border-0 ">
                            <div className="card-body bg-pink">
                                <h3 className="card-title">
                                    <b>
                                        Jeans Jacket <br />
                                        And Shorts
                                    </b>
                                </h3>
                                <p className="card-text">
                                    The passage experienced a surge in popularity during the 1960s
                                    when Letraset used it on their dry-transfer sheets.
                                </p>
                                <Link
                                    to="/shop"
                                    className="card-link btn btn-outline-info text-black border border-2 border-info"
                                >
                                    Shop now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-lg-3">
                        <img
                            src={require("../assets/image/women-chair.png")}
                            className="img-fluid "
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* category */}
            {/* <ListCategory/> */}
            <Slider></Slider>
            {/* Products */}
            <div className="container">
                <h1>Our products</h1>
            </div>
            <ListProducts></ListProducts>
            <div className="container py-0 py-md-5">
                <div className="row row-cols-1 row-cols-lg-2 my-1 my-md-4">
                    <div className=" position-relative my-5 my-lg-0">
                        <img
                            src={require("../assets/image/thetys-banner-1.jpg")}
                            className="img-fluid"
                            alt=""
                        />
                        <div className="position-absolute top-0 mt-5 pt-5 ms-5">
                            <h2 className="">
                                Home Clothes <br />And Accessories</h2>
                            <Link to="#" className="text-white">Read more</Link>
                        </div>
                    </div>
                    <div className=" position-relative">
                        <img
                            src={require("../assets/image/thetys-banner-2.jpg")}
                            className="img-fluid"
                            alt=""
                        />
                        <div className="position-absolute top-0 mt-5 pt-5 ms-5">
                            <h2 className="">
                                The Best Women Fashion <br />Outfits For Date 						</h2>
                            <Link to="#" className="text-white">Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <TabsProducts></TabsProducts> */}
            {/* <Footer></Footer> */}
        </>
    );
};
export default Home;
