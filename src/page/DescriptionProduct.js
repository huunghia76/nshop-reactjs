
import Header from './../component/defaultLayout/Header';
import Footer from './../component/defaultLayout/Footer';
function DescriptionProduct(){

    return(<>
    {/* <Header></Header> */}
    <div className='container mt-5'>
          <div  className='productGroup row'>
            <div className='productImage col-sm-12 col-md-5 col-lg-6'>
              <img
                src={require('../assets/image/panner1.jpg')}
                alt=''
                className='img-fluid productImg'
              />
              <div className='mt-4 productDescr'>
                <hr />
                {/*  */}
                <div className=' w-100'>
                  <h4 className=''>Tổng quan</h4>
                  <div className=''>
                    <p>- Mã sản phẩm 444996</p>
                    <p>- Hoàn hảo để mặc riêng hoặc phối nhiều lớp.</p>
                    <p>- Thiết kế dáng rộng hiện đại thoải mái.</p>
                    <p>- Họa tiết thiết kế đa năng.</p>
                  </div>
                </div>
                <hr />
                {/*  */}
                <div className='w-100'>
                  <h4>Chất Liệu</h4>
                  <div>
                    <p>- 100% cotton</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='productInfo col-sm-12 col-md-5 col-lg-6'>
              <h2>Casual red shirt</h2>
              <del  >20000$</del>
              <div className=''>
                <p className='text-danger fw-bold text-danger fs-2'>20000</p>
                <p className='text-danger fw-bold'>Sale</p>
                <div className='star text-warning my-3'>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                  <i className='fas fa-star'></i>
                </div>
              </div>
              <p>Aldus Corporation, which later merged with Adobe Systems, ushered lorem ipsum into the information age with its desktop publishing software Aldus PageMaker. The program came bundled with lorem ipsum dummy text for laying out page content, and other word processors like Microsoft Word followed suit. More recently the growth of web design has helped proliferate lorem ipsum across the internet as a placeholder for future text—and in some cases the final content.</p>
              <hr></hr>
              <h5>Size:</h5>
              <select className='form-select w-10'>
                <option value='s'>S</option>
                <option value='m'>M</option>
                <option value='l'>L</option>
                <option value='xl'>XL</option>
                <option value='xxl'>XXL</option>
              </select>
              <h5 className='mt-4'>Số Lượng</h5>
              <input
                type='number'
                className='w-10'
                min={1}
                defaultValue={1}
                onChange={(event) => {}}
              />

              <div className='mt-4'>
                <button
                  className='btn btn-danger'
                > Add to cart
                </button>
              </div>
            </div>
          </div>
      </div>
      {/* <Footer></Footer> */}
    </>)
}
export default DescriptionProduct;