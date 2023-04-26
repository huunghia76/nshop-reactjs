import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slider() {
    return (
        <div className="container">


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                // slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className={"py-5"}
                breakpoints={{
                    // when window width is >= 640px
                    0: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 4,
                    },
                }}

            >

                <SwiperSlide>
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../assets/image/tethys-category-slider-1.jpg")}
                                alt=""
                                className="img-fluid w-100 "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Women
                            </strong>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../assets/image/tethys-category-slider-2.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Man
                            </strong>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="">
                        <div className="position-relative ">
                            <img
                                src={require("../assets/image/tethys-category-4.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Accessories
                            </strong>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" ">
                        <div className="position-relative ">
                            <img
                                src={require("../assets/image/tethys-category-slider-3.jpg")}
                                alt=""
                                className="img-fluid "
                            />
                            <strong className="position-absolute top-0 start-0 ms-4">
                                Kids
                            </strong>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;