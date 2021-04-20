import { useContext } from "react";
import {Container, Form,Button} from "react-bootstrap"
import { useSelector } from "react-redux";
import '../resources/LoginPage.css';

const containerStyle={
    zIndex:"1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minWidth:300,
    maxWidth:400,
    minHeight: "100vh",
}
function LoginPage(){
    const email= {
        id:"email",
        labelName:"Email Address",
        helper:"Please Enter Your Email",
        inputType:"email",
    }
    const password = {
        id:"password",
        labelName:"Password",
        helper:"Please Enter Your Password",
        inputType:"password",
    }
    const formStyle = {
        border:"1px solid grey",
        borderRadius:"12px",
        padding:"12px",
        boxShadow:"2px 2px",
        backgroundColor:"white",
    }
    const onFormSubmit = (event)=>{
        //let fakeAuth =  useContext(authContext);
        console.log("Submiting Form");
    }
    const selectAuth = state => state.auth;
    console.log(useSelector(state=>state.authReducer));
    return (<Container style={containerStyle}>
                <Form style={formStyle} onSubmit={onFormSubmit}>
                    <FormItem setting={email} type="text"/>
                    <FormItem setting={password} type="password"/>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
        </Container>);
}

function FormItem({setting,type}){
    let id = setting.id
    let labelName = setting.labelName
    let helper = setting.helper
    //let type = setting.inputType
    return (
    <Form.Group>
        <Form.Label htmlFor={id}>{labelName}</Form.Label>
        <Form.Control id={id} aria-describedby={id+"-helper"} type={type}/>
        <Form.Text id={id+"-helper"}>{helper}</Form.Text>
    </Form.Group>)
    ;
}

export default LoginPage;