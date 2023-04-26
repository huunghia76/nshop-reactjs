
import Footer from './../component/defaultLayout/Footer';
import Header from './../component/defaultLayout/Header';
import ListProducts from './../component/product/ListProducts';
function Shopping() {
    return (
        <>
            {/* <Header></Header> */}
            {/* Product */}
            <div className='container '>
                <h1 className='text-center py-3'>Sản phẩm</h1>
                <div className='row p-3'>
                    <div className='col-12 col-lg-3 '>
                        <div className='row  py-3'>
                            <p className='pb-0'>Filter by Price</p>
                            <input className='text-success' type='range' />
                            <div className='d-flex align-items-center px-0 my-2'>
                                <span className='text-black-50 pe-2'>Price:</span>
                                <span><b className='me-3'> $80 — $260</b></span>
                                <button className='btn bg-light text-black ms-5 border'>Filter</button>
                            </div>
                        </div>
                        <div className='row my-3 border  border-start-0  border-end-0 border-2 py-3'>
                            <b className='  px-0'>Filter by Size</b>
                            <div className='d-flex my-2  px-0'>
                                <b className='btn btn-outline-dark  px-3 py-1 me-3'>S</b>
                                <b className='btn btn-outline-dark  px-3 py-1 me-3'>M</b>
                                <b className='btn btn-outline-dark  px-3 py-1 me-3'>L</b>
                                <b className='btn btn-outline-dark  px-2 py-1 me-3'>XL</b>
                                <b className='btn btn-outline-dark  px-2 py-1 me-3'>XS</b>
                                <b className='btn btn-outline-dark  px-2 py-1 me-3'>XXL</b>
                            </div>
                        </div>
                        <div className='row text-center border border-5 border-warning'>
                            <h3>Autumn Sale</h3>
                            <h1 className='fw-bold'>15%</h1>
                            <p className='text-black-50'>Unpacked reserved sir offering bed may and quitting speaking.</p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-9'>
                        <div className="row mt-2">
                            <div className="col-4 ">
                                <select className="form-select " aria-label="Default select example">
                                    <option defaultValue="abc">Default sorting</option>
                                    <option >Sort by price:low to hight </option>
                                    <option >Sort by price:hight to low </option>
                                </select>
                            </div>
                        </div>
                        <ListProducts></ListProducts>
                    </div>
                </div>
            </div>

            {/* <Footer></Footer> */}
        </>
    );
}
export default Shopping;
