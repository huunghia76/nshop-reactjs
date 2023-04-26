import "../assets/css/style.css";
import { Link } from 'react-router-dom';
function Blog(){

    return(<>
    {/* <Header/> */}
    <h1 className='fa-4x text-center py-4'>Blog</h1>
   
        <div className='container'>
            <div className='row pt-3 pb-5'>
                <div className='col-12 col-sm-9 '>
                    <img src={require('../assets/image/blog-img/thetys-blog-1.jpg')} className='img-fluid' alt=""/>
                   <h4 className='pt-3'>Top 10 red-carpet styles</h4> 
                   <p className='text-black-50'>The passage experienced a surge in popularity during the 1960s when Letraset used
                     it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled
                      the text with their software. Today it's seen all around the web; on templates, websites,
                       and stock designs. Use our generator to get your own, or read on for the authoritative history 
                       of lorem ipsum. Lorem ipsum, or lipsum as it ...</p>
                      By<b> Buzz Aldrin</b> 
                      <em> December 18, 2021</em>
 
                       <div className='row row-cols-1 row-cols-sm-2 pt-4'>
                            <div>
                                <img src={require('../assets/image/blog-img/thetys-blog-2.jpg')} className='img-fluid' alt=""/>
                                <h4 className='pt-3'>Top 10 red-carpet styles</h4> 
                                <p className='text-black-50'>The passage experienced a surge in popularity during the 1960s when Letraset used
                                    it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled
                                    the text with their software. Today it's seen all around the web; on templates, websites,
                                    and stock designs. Use our generator to get your own, or read on for the authoritative history 
                                    of lorem ipsum. Lorem ipsum, or lipsum as it ...</p>
                                    By<b> Buzz Aldrin</b> 
                                    <em> December 18, 2021</em>
                            </div>
                            <div>
                                <img src={require('../assets/image/blog-img/thetys-blog-3.jpg')} className='img-fluid' alt=""/>
                                <h4 className='pt-3'>Top 10 red-carpet styles</h4> 
                                <p className='text-black-50'>The passage experienced a surge in popularity during the 1960s when Letraset used
                                    it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled
                                    the text with their software. Today it's seen all around the web; on templates, websites,
                                    and stock designs. Use our generator to get your own, or read on for the authoritative history 
                                    of lorem ipsum. Lorem ipsum, or lipsum as it ...</p>
                                    By<b> Buzz Aldrin</b> 
                                    <em> December 18, 2021</em>
                            </div>
                       </div>
                </div>
                <div className='col-12 col-sm-3'>
                    <b>Categories</b>
                    <p><Link to='#' className='a py-0 px-2 text-black-50' >Event </Link></p>
                    <p><Link to='#' className='a py-0 px-2 text-black-50' >Fashion</Link></p>
                    <p><Link to='#' className='a py-0 px-2 text-black-50' >List Style</Link></p>
                    <p><Link to='#' className='a py-0 px-2 text-black-50' >Photography</Link></p>

                    <div>
                    
                        <b>Instagram</b>
                        <div className='row row-cols-3 g-3'>
                            <img src={('https://spacedemo-cec2.kxcdn.com/demo/tethys/wp-content/uploads/sites/18/2019/11/tethys-inst-5.jpg')} className='img-fluid' alt=""/>
                            <img src={('https://spacedemo-cec2.kxcdn.com/demo/tethys/wp-content/uploads/sites/18/2019/11/tethys-inst-5.jpg')} className='img-fluid' alt=""/>
                            <img src={('https://spacedemo-cec2.kxcdn.com/demo/tethys/wp-content/uploads/sites/18/2019/11/tethys-inst-5.jpg')} className='img-fluid' alt=""/>
                            <img src={('https://spacedemo-cec2.kxcdn.com/demo/tethys/wp-content/uploads/sites/18/2019/11/tethys-inst-5.jpg')} className='img-fluid' alt=""/>
                            <img src={('https://spacedemo-cec2.kxcdn.com/demo/tethys/wp-content/uploads/sites/18/2019/11/tethys-inst-5.jpg')} className='img-fluid' alt=""/>
                            <img src={('https://spacedemo-cec2.kxcdn.com/demo/tethys/wp-content/uploads/sites/18/2019/11/tethys-inst-5.jpg')} className='img-fluid' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <Footer/> */}
    </>)
}
export default Blog;