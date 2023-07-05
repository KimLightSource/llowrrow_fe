import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AuthContext from "../../store/auth-context";
import {Container, Nav, Navbar} from "react-bootstrap";

const MainNavigation = () =>{
    const authCtx = useContext(AuthContext);
    const [nickname, setNickname] = useState('');
    let isLogin = authCtx.isLoggedIn;
    let isGet = authCtx.isGetSuccess;

    const callback = (str:string) => {
        setNickname(str);
    }

    useEffect(() => {
        if (isGet) {
            console.log('get start');
            callback(authCtx.userObj.nickname);
        }
        }
    , [isGet]);

    const toggleLogoutHandler = () => {
        authCtx.logout();
    }

    return (
        <header >

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">llor rrow</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {!isLogin &&  <Nav.Link href="/login">로그인</Nav.Link>}
                            {!isLogin && <Nav.Link href="/signup">회원가입</Nav.Link>}
                            {isLogin && <Nav.Link href='/profile'>{nickname}</Nav.Link>}
                            {isLogin && <button onClick={toggleLogoutHandler}>Logout</button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default MainNavigation;
