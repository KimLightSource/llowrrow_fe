import React, {Children} from 'react';
import {Carousel} from "react-bootstrap";

const contentStyle:any = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    position: 'absolute',
    bottom: '50px'
};

const MainForm = () => {
    const onChange = (currentSlide:any) => {
        console.log(currentSlide);
    };
    return (
        <div>
            <div id="main">
                <div id="banner">
                    <Carousel>
                        <div>
                            <img src="../images/banners/./banner1.png" alt="" />
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <img src="../images/banners/./banner2.png" alt="" />
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <img src="../images/banners/./banner1.png" alt="" />
                            <h3 style={contentStyle}>3</h3>
                        </div>
                    </Carousel>
                </div>
                <div id="product-list" className='inner'>
                    <h2>llow rrow</h2>
                    {/*<div id="product-items">*/}
                    {/*    /!* 나중에 map 이용해서 밑에꺼 8개 뿌려줄거임 *!/*/}
                    {/*    {products.map(product => <MainProduct key = {product.id} product={product} />)}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default MainForm;
