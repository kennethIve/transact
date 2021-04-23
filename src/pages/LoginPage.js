import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Container, Form,Button, Row, Col, Card,CardGroup, FormGroup, Spinner} from "react-bootstrap"
import {SocialLogin} from 'react-social-login'
import '../resources/common.css';
//firebase import
import firebase from 'firebase/app';
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAGpyiG8KF27rc1pRENVyvzF7zVUY_y9c",
    authDomain: "transact-37782.firebaseapp.com",
    projectId: "transact-37782",
    storageBucket: "transact-37782.appspot.com",
    messagingSenderId: "641404545269",
    appId: "1:641404545269:web:dd2b15c75df584d808fdbc",
    measurementId: "G-GD766RELW7"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const imgSrc = "https://images.squarespace-cdn.com/content/v1/5aafe55b25bf020f2d6611be/1597943292030-1C34N6VSZRQ0VWUC76NM/ke17ZwdGBToddI8pDm48kDFgITcRoterXoQdllT5ciUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcyVJeuQwsDiERxwnf8ip0R6hirDhKZGvV2qRPjs1kpsBNSEeFoLoE0b5UGAvrXagL/reasons_1200x675-v02-1.png";
const bgImage = {
    backgroundImage:`url(${imgSrc})`,
    flex:"1",
    backgroundSize:"cover",
    backgroundPosition:"50%",
}
const containerStyle={
    zIndex:"1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
    maxWidth:"1200px"
}

export const LoginPage = () =>{
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.authReducer);
    const [emailValue,setEmailValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const [logining,setLogining] = useState(false);
    //lock the login button
    useEffect(()=>{},[logining])
    const onFormSubmit = (event)=>{
        event.preventDefault();
        setLogining(true);
        dispatch({
            type:"login",
            payload:{emailValue,passwordValue},
        });
        setTimeout(()=>setLogining(false),"2000");
    };

    return (<Container fluid style={containerStyle}>
            <Row noGutters style={ {minHeight:"600px"} }>
                <Col md={6} className={"d-none d-md-block"} style={bgImage}>
                
                </Col>
                <Col md={6} style={ {background:"green"} } className={"bg-light"}>
                    <center>Login</center>
                    <Container>
                    <Form onSubmit={onFormSubmit} style={{padding:"12px"}}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="" placeholder="Enter Email" value={emailValue} 
                                onChange={e=>setEmailValue(e.target.value)} disabled={logining}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" 
                                value={passwordValue} onChange={e=>setPasswordValue(e.target.value)} disabled={logining}/>
                        </Form.Group>
                        <FormGroup>
                            <Form.Check type="checkbox" label="Remember Me" disabled={logining}/>
                        </FormGroup>
                        <Button type="submit" variant="success" block disabled={logining}>
                            {logining?<Spinner as="span" animation="border" role="status"/>:"Login"}
                        </Button> 
                        <div className="separator">or</div>
                            <Button block>Sign in with Facebook</Button>
                            <Button block className={"bg-white text-dark"}>Sign in with Google</Button>
                    </Form>
                    </Container>
                </Col>
            </Row>
        </Container>);
}