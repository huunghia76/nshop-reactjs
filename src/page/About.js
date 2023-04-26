import Footer from "../component/defaultLayout/Footer";
import Header from "../component/defaultLayout/Header";
import { Link } from "react-router-dom";
import SocialNetwork from "../component/SocialNetwork";
function About(params) {
    return (
        <>
            {/* <Header /> */}

            <div className="container">
                <h1 className="text-center py-3 fa-4x">About</h1>
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <h3>
                            Best tips on how to easily go lighter if you have color treated
                            brunette hair
                        </h3>
                        <img
                            className="img-fluid"
                            src={require("../assets/image/about/tumblr_inline_o9fbv69M9b1upqw9y_1280.jpg")}
                            alt=""
                        />
                        <p>
                            {" "}
                            As a brunette, my hair color has always been important to me
                            especially when it comes to coloring and high lights. If you have
                            brunette hair, you can understand the struggle of trying to
                            maintain the color you like while avoiding making it looking flat
                            or lack-luster.{" "}
                        </p>
                    </div>
                    <div className="col-12 col-lg-4 text-center py-4 ">
                        <div className="border border-3 border-secondary">
                            <div className="mb-4 ">
                                <em className="text-center fw-bold fs-4 border border-3 border-end-0 border-start-0 border-top-0">
                                    About
                                </em>
                            </div>
                            <img
                                className="img-fluid w-25"
                                style={{ borderRadius: "50%" }}
                                src={require("../assets/image/about/avt.jpg")}
                                alt=""
                            />

                            <p className="p-3">
                                <span className="fw-bold">Fashion Chic</span> is a premium
                                Tumblr theme for fashion and lifestyle bloggers. It has an
                                elegant look that can be customized even further to make it fit
                                your brand.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col my-4 ">
                                <div className=" border border-1 border-secondary  py-3">
                                <SocialNetwork></SocialNetwork>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b>Categories</b>
                            <p>
                                <Link to="#" className="a py-0 px-2 text-black-50">
                                    Event{" "}
                                </Link>
                            </p>
                            <p>
                                <Link to="#" className="a py-0 px-2 text-black-50">
                                    Fashion
                                </Link>
                            </p>
                            <p>
                                <Link to="#" className="a py-0 px-2 text-black-50">
                                    List Style
                                </Link>
                            </p>
                            <p>
                                <Link to="#" className="a py-0 px-2 text-black-50">
                                    Photography
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
export default About;
