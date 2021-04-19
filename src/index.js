import React,{useContext,createContext,useState} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {createStoreHook, Provider} from 'react-redux';
//import rootReducer from './reducers'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound404 from './errorPages/NotFound404';

const authContext = createContext();
const rootReducer =(state,action)=>{
  switch(action){
    default:
      return state;
  }
};
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ProvideAuth>
      <Router>
      <Switch>
        <Route path="/login" component={LoginPage}/>
        <PrivateRoute>
          <Route exact path="/" component={MainPage}/>
        </PrivateRoute>
        <Route path="*">
          <NotFound404/>
        </Route>
      </Switch>
      </Router>
    </ProvideAuth>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  

const fakeAuth = {
  isAuthenticated:false,
  signin(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb,100);
  },
  signout(cb){
    fakeAuth.isAuthenticated = false;
    setTimeout(cb,100);
  },
}


function ProvideAuth({children})
{
  const auth = useProviderAuth();
  console.log(auth);
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}
function useProviderAuth(){
  const [user,setUser] = useState(null);
  
  const signin = cb =>{
    return fakeAuth.signin(()=>{
      setUser("user");
      cb();
    });
  }
  
  const signout = cb =>{
    return fakeAuth.signout(()=>{
      setUser(null);
      cb();
    });
  }

  return {user,signin,signout};
}
function useAuth(){ return useContext(authContext);}

function PrivateRoute({children, ...rest})
{
  let auth = useAuth();
  return (
  <Route 
    {...rest} 
    render={ 
      ({location})=>auth.user ?(children):(<Redirect to={{pathname:"/login",state:{from:location}}}/>) 
    }
  />);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
