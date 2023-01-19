route

import React from 'react';
import Mainpage from '../components/Mainpage';
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Mainpage />
      <Footer />
    </div>
  )
}

export default Home;

import React from 'react';
import Orders from '../components/Orders';
import Footer from '../components/Footer'


const Buy = () => {
  return (
    <div>
      <Orders />
      <Footer />
    </div>
  )
}

export default Buy;


import React from 'react';
import Second from '../components/Second';
import Footer from '../components/Footer';
import SecondCards from '../components/Second';



const About = () => {
  return (
    <div>
      <Second />
      <SecondCards />
      <Footer />
    </div>
  )
}

export default About;
