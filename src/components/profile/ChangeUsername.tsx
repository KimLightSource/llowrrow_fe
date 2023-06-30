import React, {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../store/auth-context";

const ChangeUsername = () => {

    let navigate = useNavigate();

    const authCtx = useContext(AuthContext);
    let nicknameInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredNickname = nicknameInputRef.current!.value;

        console.log('change nickname start');
        authCtx.changeNickname(enteredNickname);
        if (authCtx.isSuccess) {
            authCtx.getUser();
            alert('변경 되었습니다.');
            authCtx.getUser();
            navigate("/", {replace: true});
        }


    }

    return (
        <form onSubmit={submitHandler} >
            <div >
                <label htmlFor='username'>New Nickname</label>
                <input type='text' id='username'minLength={3} required ref={nicknameInputRef}/>
            </div>
            <div >
                <button type='submit'>Change Username</button>
            </div>
        </form>
    );
};

export default ChangeUsername;
