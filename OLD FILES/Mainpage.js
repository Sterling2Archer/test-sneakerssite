import React from 'react';
import './MainpageStyles.css';
import logo from '../assets/logoofficial.png';
import Moment from 'react-moment';


const Mainpage = () => {
  return (
  <div>
    <div className='sneakers'> 
        <center> <h1>Welcome, Buenas </h1> </center>
        <center> <img src={logo} className='App-logo' alt='logo' /> </center>
        <center> <h2>GET TO KNOW US. GET TO KNOW YOU. </h2> </center>
    </div>

    <center> <b>
    <Moment format="MMMM DDDo YYYY hh:mma"></Moment> nyc
    </b></center> 
   
   <p>yo</p>
    </div>
  )
}

export default Mainpage;
