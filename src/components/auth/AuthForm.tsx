import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../store/auth-context";

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
        <section >
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div >
                    <label htmlFor='email'>Your email</label>
                    <input type='email' id='email' required ref={userIdInputRef}/>
                </div>
                <div >
                    <label htmlFor="password">Your password</label>
                    <input type='password' id='password' required ref={passwordInputRef}/>
                </div>
                <div >
                    <button type='submit'>Login</button>
                    {isLoading && <p>Loading</p>}
                    <p>Create Account</p>
                </div>
            </form>
        </section>

    );
};

export default AuthForm;
