import React, {Children} from 'react';
import {Carousel} from "react-bootstrap";
import MainProductListForm from "./MainProductListForm";

const contentStyle: any = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    position: 'absolute',
    bottom: '50px'
};

const MainForm = () => {
    const onChange = (currentSlide: any) => {
        console.log(currentSlide);
    };
    return (

        <div>
            <header className="bg-dark py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder">강커피</h1>
                        <p className="lead fw-normal text-white-50 mb-0">앙~ 커피좋아!</p>
                    </div>
                </div>
            </header>
           <MainProductListForm></MainProductListForm>
        </div>
    );
};

export default MainForm;
