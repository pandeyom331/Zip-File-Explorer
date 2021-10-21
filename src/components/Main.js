import React, {useState} from 'react'
import Footer from './footer';

import Navbar from './Navbar'
import Section from './section';
import Sidebar from './Sidebar';

function Main() {

  const [isOpen , setIsOpen] = useState(false);

  function toggle(){
      setIsOpen(!isOpen);
  }

    return (
        <>
          <Navbar toggle={toggle}/> 
          <Sidebar isOpen={isOpen} toggle={toggle}/>           
          <Section/>
          <Footer />
        </>
    )
}

export default Main;
