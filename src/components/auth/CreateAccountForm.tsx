import React, {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../store/auth-context";

const CreateAccountForm = () => {

    let navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const userIdInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const nicknameInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredUserId = userIdInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;
        const enteredNickname = nicknameInputRef.current!.value;
        const enteredEmail = emailInputRef.current!.value;
        authCtx.signUp(enteredUserId, enteredPassword, enteredEmail, enteredNickname);

        if (authCtx.isSuccess) {
            return navigate("/", {replace: true});
        } else {
            // return alert(authCtx.response)
        }

    }

    return (
        <div className="container">
            <div className="input-form-background row">
                <div className="input-form col-md-12 mx-auto">
                    <h4 className="mb-3 mt-4">회원가입</h4>
                    <form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="name">이름</label>
                                <input type="text" className="form-control" id="name" placeholder="" required/>
                                <div className="invalid-feedback">
                                    이름을 입력해주세요.
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="nickname">별명</label>
                                <input type="text" className="form-control" id="nickname" placeholder=""
                                       required/>
                                <div className="invalid-feedback">
                                    별명을 입력해주세요.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">이메일</label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com"
                                   required/>
                            <div className="invalid-feedback">
                                이메일을 입력해주세요.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address">주소</label>
                            <input type="text" className="form-control" id="address" placeholder="서울특별시 강남구" required/>
                            <div className="invalid-feedback">
                                주소를 입력해주세요.
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="address2">상세주소<span className="text-muted">&nbsp;(필수 아님)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="상세주소를 입력해주세요."/>
                        </div>

                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="aggrement" required/>
                            <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
                        </div>
                        <div className="mb-4"></div>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">가입 완료</button>
                    </form>
                </div>
            </div>
        </div>

    );
};


export default CreateAccountForm;
