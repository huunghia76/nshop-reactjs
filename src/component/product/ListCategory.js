function ListCategory(params) {
    return <>
        <div className="container">
                <div className="row row-cols-2 row-cols-lg-4  g-3 my-4">
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../../assets/image/tethys-category-slider-1.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Women
                            </strong>
                        </div>
                    </div>
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../../assets/image/tethys-category-slider-2.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Man
                            </strong>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="position-relative ">
                            <img
                                src={require("../../assets/image/tethys-category-slider-3.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Kids
                            </strong>
                        </div>
                    </div>
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../../assets/image/tethys-category-4.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Accessories
                            </strong>
                        </div>
                    </div>
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../../assets/image/tethys-category-4.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Accessories
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
    </>
}
export default ListCategory;