import Footer from "../component/defaultLayout/Footer";
import Header from "../component/defaultLayout/Header";
function Contact(){
    return(<>
    {/* <Header/> */}
        <div className="container">
            <h1 className='fa-4x text-center py-4'>Contact</h1>
                <div className="row row-cols-1 row-cols-lg-2">
                    <div>
                        <div>
                            <h2>Home</h2>
                            <div className="d-flex justify-content-between pe-5 me-5">
                                <p>Address:</p>
                                <p className="text-black-50"> 195 Mulberry St, New York</p>
                            </div>
                            <div className="d-flex justify-content-between pe-5 me-5">
                                <p>Phone:</p>
                                <p className="text-black-50"> (+84) 012345678</p>
                            </div>
                            <div className="d-flex justify-content-between pe-5 me-5">
                                <p>Email:</p>
                                <p className="text-black-50"> nghiahoangas@gmail.com</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2>Hoc Mon</h2>
                            <div className="d-flex justify-content-between pe-5 me-5">
                                <p>Address:</p>
                                <p className="text-black-50"> 195 Mulberry St, New York</p>
                            </div>
                            <div className="d-flex justify-content-between pe-5 me-5">
                                <p>Phone:</p>
                                <p className="text-black-50"> (+84) 012345678</p>
                            </div>
                            <div className="d-flex justify-content-between pe-5 me-5">
                                <p>Email:</p>
                                <p className="text-black-50"> nghiahoangas@gmail.com</p>
                            </div>                                                                                                                                      
                        </div>
                    </div>
                    
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1657809490021!5m2!1svi!2s"
                 width="100%" height="550"  
                 allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={'bản đồ'}></iframe>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
                <div className="row pt-5">
                    <div className="col ">
                        <div className="">
                        <i className="fa-solid fa-3x fa-truck"></i>
                        </div>
                    <b className="fs-4">Free Worldwide Shipping</b> 
                        <p className='text-black-50'>Clintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin.</p>
                    </div>
                    <div className="col">
                        <div className="">
                            <i className="fa-solid fa-3x fa-credit-card"></i>
                        </div>
                        <b className="fs-4">Save Payments</b> 
                        <p className='text-black-50'>Laying out pages with meaningless filler text can be very useful when the focus is meant.</p>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col ">
                        <div className="">
                        <i className="fa-solid fa-shield-halved fa-3x"></i>
                        </div>
                    <b className="fs-4">Shopping Protection</b> 
                        <p className='text-black-50'>The passage experienced a surge in popularity during the 1960s when Letraset used it.</p>
                    </div>
                    <div className="col">
                        <div className="">
                        <i className="fa-solid fa-headset fa-3x"></i>
                        </div>
                        <b className="fs-4">24/7 Support</b> 
                        <p className='text-black-50'>Today it's seen all around the web, on templates, websites, and other stock designs.</p>
                    </div>
                </div>
            </div>
            <div className="col">
            <h1 className="pt-5">Ask Your Questions</h1>
            <p className="text-black-50 py-3">What I find remarkable is that this text has been the industry's standard dummy text ever since some printer in the lorem.</p>
            <div className="d-flex justify-content-between">
            

                <input type="text" className="form-control me-3 border border-dark" placeholder="Your Name" />
                <input type="text" className="form-control border border-dark" placeholder="Your email" />
            </div>
                <textarea
                    name=""
                    id=""
                    rows="5"
                    className="form-control mt-4 border border-dark"
                    placeholder="Message"
                ></textarea>
                <button className="btn btn-dark px-4 py-2 mt-3 mb-5 ">Send</button>
            </div>
        </div>
    </div>
    {/* <Footer/> */}
    </>);
}
export default Contact;