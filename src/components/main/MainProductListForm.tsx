import React, {Component} from 'react';

class MainProductListForm extends Component {
    render() {
        return (
            <div>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/*Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/*Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/*Product name*/}
                                            <h5 className="fw-bolder">반건조징어 브루잉 커피</h5>
                                            {/*Product price*/}
                                            $40.00 - $80.00
                                        </div>
                                    </div>
                                    {/*Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Sale badge*/}
                                    <div className="badge bg-dark text-white position-absolute"
                                         style={{top: "0.5rem", right: "0.5rem"}}>Sale
                                    </div>
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">고씨의 운좋게 잡은 잠프볼</h5>
                                            {/* Product reviews*/}
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            {/* Product price*/}
                                            <span className="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Sale badge*/}
                                    <div className="badge bg-dark text-white position-absolute"
                                         style={{top: "0.5rem", right: "0.5rem"}}>Sale
                                    </div>
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">폼미친 체스</h5>
                                            {/* Product price*/}
                                            <span className="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">펀치머신 코코</h5>
                                            {/* Product reviews*/}
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            {/* Product price*/}
                                            $40.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Sale badge*/}
                                    <div className="badge bg-dark text-white position-absolute"
                                         style={{top: "0.5rem", right: "0.5rem"}}>Sale
                                    </div>
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">Sale Item</h5>
                                            {/* Product price*/}
                                            <span className="text-muted text-decoration-line-through">$50.00</span>
                                            $25.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">Fancy Product</h5>
                                            {/* Product price*/}
                                            $120.00 - $280.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">View options</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Sale badge*/}
                                    <div className="badge bg-dark text-white position-absolute"
                                         style={{top: "0.5rem", right: "0.5rem"}}>Sale
                                    </div>
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">Special Item</h5>
                                            {/* Product reviews*/}
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            {/* Product price*/}
                                            <span className="text-muted text-decoration-line-through">$20.00</span>
                                            $18.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="card h-100">
                                    {/* Product image*/}
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                                         alt="..."/>
                                    {/* Product details*/}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* Product name*/}
                                            <h5 className="fw-bolder">Popular Item</h5>
                                            {/* Product reviews*/}
                                            <div className="d-flex justify-content-center small text-warning mb-2">
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                                <div className="bi-star-fill"></div>
                                            </div>
                                            {/* Product price*/}
                                            $40.00
                                        </div>
                                    </div>
                                    {/* Product actions*/}
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        <div className="text-center"><a className="btn btn-outline-dark mt-auto"
                                                                        href="#">Add to cart</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default MainProductListForm;
