import React, {Component, useRef, useState} from 'react';

const ProductRegister = () => {
        const [productData, setProductData] = useState({
            productName: '',
            amount: 0,
            price: 0,
            sale: 0,
            category: '',
            description: '',
            imgPath: ''
        });

        const { productName, amount, price, sale, category, description, imgPath} = productData;

        const onChange = (e: { target: { value: any; name: any; }; }) => {
            const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
            setProductData({
                ...productData, // 기존의 input 객체를 복사한 뒤
                [name]: value // name 키를 가진 값을 value 로 설정
            });
        };

        const submitHandler = async () => {

        }

        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-6">상품 등록 </h1>
                    </div>
                </div>

                <div className="container">
                    <form className="form-horizontal" method="post"
                          onSubmit={submitHandler}>

                        <div className="form-group row">
                            <label className="col-sm-2">상품명</label>
                            <div className="col-sm-3">
                                <input type="text"
                                       name="productName"
                                       className="form-control"
                                       onChange={onChange}
                                       value={productName}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2">가격</label>
                            <div className="col-sm-3">
                                <input type="text" name="price" className="form-control" onChange={onChange}
                                       value={price}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2">상세 정보</label>
                            <div className="col-sm-3">
                                <textarea name="description" cols={50} rows={2} onChange={onChange}
                                          value={description}></textarea>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-2">분류</label>
                            <div className="col-sm-3">
                                <input type="select" name="category" className="form-control" onChange={onChange}
                                       value={category}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2">재고 수</label>
                            <div className="col-sm-3">
                                <input type="text" name="amount" className="form-control" onChange={onChange}
                                       value={amount}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2">세일 퍼센트</label>
                            <div className="col-sm-3">
                                <input type="text" name="sale" className="form-control" onChange={onChange}
                                       value={sale}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-2">사진</label>
                            <div className="col-sm-3">
                                <input type="file" name="imgPath" className="form-control" onChange={onChange}
                                       value={imgPath}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-offset-2 col-sm-10">
                                <input type="submit" className="btn btn-primary" value="등록"/>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

export default ProductRegister;
