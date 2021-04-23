import React from 'react';
import { useSelector } from 'react-redux';
import {Route,Redirect} from 'react-router-dom';

export const AuthRoute = ({component:Component,...rest}) => {
    let { isAuth }  = useSelector(state=>state.authReducer)
    return (<Route {...rest} render={props => (
        isAuth
            ? <Component {...props}/> 
                : <Redirect to={ { pathname:"/login",state:{from:props.location} } } /> 
    )}/>)
}