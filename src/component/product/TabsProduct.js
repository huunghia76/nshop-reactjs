import ListProducts from './ListProducts';
import ListProductsNew from './ListProductsNew';
const TabsProducts = () => {

    return (<>
        {/* <div className=''> */}
            <div className="wrapper container">
                <div className="tabs">
                    <div className="tab">
                        <input type="radio" name="css-tabs" id="tab-1" defaultChecked className="tab-switch" />
                        <label htmlFor="tab-1" className="tab-label">New Product</label>
                        <div className="tab-content">
                        <ListProducts></ListProducts>
                        </div>
                    </div>
                    <div className="tab">
                        <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
                        <label htmlFor="tab-2" className="tab-label">Best Product</label>
                        <div className="tab-content">
                        <ListProductsNew></ListProductsNew>
                        </div>
                    </div>
                    <div className="tab">
                        <input type="radio" name="css-tabs" id="tab-3" className="tab-switch" />
                        <label htmlFor="tab-3" className="tab-label">Sale Product</label>
                        <div className="tab-content">
                        <ListProducts></ListProducts>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </>);
}

export default TabsProducts;