import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../store/auth-context";
import './AuthForm.css';
import logo from '../../images/logo_llow_rrow.png';

const AuthForm = () => {
    const userIdInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const authCtx = useContext(AuthContext);

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const enteredUserId = userIdInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;

        setIsLoading(true);
        authCtx.login(enteredUserId, enteredPassword);
        setIsLoading(false);

        if (authCtx.isSuccess) {
            navigate("/", {replace: true});
        }
    }

    return (

                <div id="wrap">
                    <div id="login_area">
                        <div id="login_header" className="position-sticky">
                            <img src={logo}/>
                        </div>
                        <div id="login_box">
                            <form onSubmit={submitHandler}>
                                <input
                                    className="input"
                                    type="text"
                                    id="userid"
                                    placeholder="아이디를 입력해 주세요"
                                    required
                                    ref={userIdInputRef}
                                />
                                <br/>
                                <input
                                    className="input"
                                    type="password"
                                    id="password"
                                    placeholder="비밀번호를 입력해 주세요"
                                    required
                                    ref={passwordInputRef}
                                />
                                <br/>

                                <span className="submit"><input type="submit" value="로그인"/></span>
                                {/*<label className="checkbox">*/}
                                {/*    <input type="checkbox" name="autologin" id="autologin" />*/}
                                {/*    자동 로그인*/}
                                {/*</label>*/}
                            </form>
                            <ul id="sub_menu">
                                <li><a href="/signup">회원 가입</a></li>
                                <li><a href="#">아이디 찾기</a></li>
                                <li><a href="#">비밀번호 찾기</a></li>
                            </ul>
                        </div>
                        <div id="social">
                            <a id="kakao" href="#">
                                <span>카카오 로그인</span>
                            </a>
                            <a id="apple" href="#">
                                <span>Naver 로그인</span>
                            </a>
                        </div>
                    </div>
                </div>

    );
};

export default AuthForm;
