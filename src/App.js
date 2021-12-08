
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import Navbar1 from './components/Navbar1';
import Signup from './components/Signup';
import Login from './components/Login';
import Myprofile from './components/Profile';
import Feed from './components/Feed';
import Createprofile from './components/Createprofile';

function App() {  
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/navbar1' component={Navbar1}/>
      <Route  path='/signup' component={Signup}/>
      <Route  path='/login' component={Login}/>
      <Route  path='/profile/:id' component={Myprofile}/>
      <Route  path='/feed/:id' component={Feed}/>
      <Route  path='/create' component={Createprofile}/>
    </Switch>
  );
}
   
export default App;
     
    
      
    
