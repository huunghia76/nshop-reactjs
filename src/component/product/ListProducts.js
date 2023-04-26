
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { listProductDB } from './dataProduct';
function ListProducts() {

    // let colors = ['red', 'blue', 'gray'];
    // const [colorState, setColor] = useState('red');

    // const elmColor = colors.map((color, index) => {
    //     const setActiveColor = (color) => {
    //         setColor(color);
    //     }
    //     return <div key={index}
    //         className={colorState === color ? 'choose-color active-color' : 'choose-color'}
    //         style={{ backgroundColor: color }}
    //         onClick={() => setActiveColor(color)}
    //     >
    //         <i className="fa-solid fa-check "   ></i>
    //     </div>
    // });
    return (<>
        <div className="container my-5 products px-3 mx-0 mx-sm-auto">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 px-0 ">
                {listProductDB.map((item) => {
                    return <div key={item.id} className="position-relative my-5 px-0 px-sm-3">
                        <img
                            src={`${item.image}`}
                            alt=""
                            className="img-fluid "
                        />
                        <strong className="position-absolute top-0  end-0 bg-white pe-0 pe-sm-3">
                            <p>
                                <Link to="#" className="m-2 text-black " data-bs-toggle="tooltip" data-bs-placement="left" title="Like!">
                                    <i className="fa-solid fs-4  fa-heart"></i>
                                </Link>
                            </p>
                            <p>
                                <Link to="/descr_product" className="m-2 text-black" data-bs-toggle="tooltip" data-bs-placement="left" title="Description!">
                                    <i className="fa-solid fs-4 pe-1  fa-circle-info"></i>
                                </Link>
                            </p>
                            <p>
                                <Link to="#" className="m-2 text-black" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to cart!">
                                    <i className="fa-solid fa-bag-shopping fs-4 pe-1"></i>
                                </Link>
                            </p>
                        </strong>
                        <div className="position-absolute bottom-0 start-0 text-center d-flex ms-2 p-2 bg-white">

                            {item.colors.map((color, index) => {
                                return <div key={index} className='choose-color ' style={{ backgroundColor: color }} >
                                    <i className="fa-solid fa-check "   ></i>
                                </div>
                            })}

                        </div>
                        <div className="d-flex justify-content-between mt-3 px-2">
                            <p>{item.name}</p>
                            <b>${item.price}</b>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>)
}
export default ListProducts;