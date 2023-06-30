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
        authCtx.signUp(enteredUserId, enteredPassword,enteredEmail, enteredNickname);

        if (authCtx.isSuccess) {
            return navigate("/", {replace: true});
        } else {
            // return alert(authCtx.response)
        }

    }

    return (
        <section >
            <h1>Create Account</h1>
            <form onSubmit={submitHandler}>
                <div >
                    <label htmlFor='userid'>Your id</label>
                    <input type='id' id='userid' required ref={userIdInputRef}/>
                </div>
                <div >
                    <label htmlFor='email'>Your email</label>
                    <input type='email' id='email' required ref={emailInputRef}/>
                </div>
                <div >
                    <label htmlFor="password">Your password</label>
                    <input type='password' id='password' required ref={passwordInputRef}/>
                </div>
                <div >
                    <label htmlFor="nickname">NickName</label>
                    <input type='text' id='nickname' required ref={nicknameInputRef}/>
                </div>
                <div >
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </section>
    );
};


export default CreateAccountForm;
