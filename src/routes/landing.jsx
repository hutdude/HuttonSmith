import bgimg from '../assets/Background.jpg'
import React, { useEffect, useRef, useState } from 'react';
import '../styles.css'
import { RiYoutubeLine } from "react-icons/ri"; 
import { FaInstagram } from "react-icons/fa";
import 'animate.css'



export default function Landing() {
        const [activeSection, setActiveSection] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Determine which section to activate based on scroll position
    if (scrollPosition > 1400) {
      setActiveSection(5);
    } else if (scrollPosition > 1000) {
        setActiveSection(4);
      } else if (scrollPosition > 600) {
      setActiveSection(3);
    } else if (scrollPosition > 200) {
        
      setActiveSection(2);
    } 

    else{
        setActiveSection(0)
    }
  }, [scrollPosition]);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

 

    return(
        <div className=' h-[3000px] flex'>
            <div className='text-shadow h-screen overflow-hidden w-screen fixed bg-black'>
                
                <div className='grid grid-rows-3 absolute h-screen w-screen p-6 md:p-12 z-20 '>
                        <div className='flex row-start-1 items-top justify-between  w-full '>
                                <div className='w-full '>
                                        <h1 onClick={() => setActiveSection(5)} className=' hover:cursor-pointer text-shadow text-center md:text-left  text-xl tracking-widest'>HUTTON SMITH</h1>
                                        <h2 className=' hover:cursor-default text-center md:text-left text-bold text-white text-md'>PRODUCER &ensp; • &ensp; ENGINEER &ensp; • &ensp; MIX/MASTER</h2>
                                </div>
                                <div>
                                </div>
                                <div className='text-white hidden md:flex text-shadow space-x-6 justify-center align-center ' id="socials">
                                        <a className='hover:scale-110  h-fit' target='_blank' href="https://www.youtube.com/channel/UCaDmbYdgKmINSukz-j1boQQ">
                                                <RiYoutubeLine className='h-10 w-10' />
                                        </a>
                                        <a className='hover:scale-110 h-fit' target='_blank' href="https://www.instagram.com/huttonsmith">
                                                <FaInstagram className='h-10 w-10'/>
                                        </a>
                                </div>
                        </div>
                        
                        <div className='hidden md:flex row-start-2 row-end-3 absolute inset-0 justify-start items-center p-6 md:p-12 text-white'>
                        <div className='flex text-shadow text-lg flex-col space-y-8'>

                                
                                <a className='hover:cursor-pointer hover:scale-110 ' onClick={() => setActiveSection(2)}>
                                        <h1>about</h1>
                                </a>
                                <a className='hover:cursor-pointer hover:scale-110 'onClick={() => setActiveSection(3)}>
                                        <h1>work</h1>
                                </a>
                                <a className='hover:cursor-pointer hover:scale-110 ' onClick={() => setActiveSection(4)}>
                                        <h1>services</h1>
                                </a>
                                
                                <a className='hover:cursor-pointer hover:scale-110 ' onClick={() => setActiveSection(5)}>
                                        <h1>contact</h1>
                                </a>
                        </div>
                </div>
                </div>
                
                <div className='w-full h-full flex justify-center items-start'>
                        <img className='w-full md:h-full h-1/2 object-cover transform' src={bgimg}></img>
                </div>

                

                {/* Section 2 */}
                <div id="about" className={` h-full w-full top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 Z-30 transition-opacity duration-500 backdrop-blur ${activeSection === 2 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center h-full justify-center">
                        <h1 className="text-4xl font-bold">About</h1>
                        </div>
                </div>

                {/* Section 3 */}
                <div id="work" className={`h-full w-full absolute top-0 left-0 backdrop-blur transition-opacityg duration-500 ${activeSection === 3 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center h-full justify-center">
                        <h1 className="text-4xl font-bold">Work</h1>
                        </div>
                </div>

                {/* Section 4 */}
                <div id="services" className={`h-full w-full absolute top-0 left-0 backdrop-blur transition-opacity duration-500 ${activeSection === 4 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center h-full justify-center">
                        <h1 className="text-4xl font-bold">Services</h1>
                        </div>
                </div>
                

                {/* Section 4 */}
                <div id="contact" className={`h-full w-full absolute top-0 left-0 backdrop-blur transition-opacity duration-500 ${activeSection === 5 ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex items-center h-full justify-center">
                        <h1 className="text-4xl font-bold">Contact</h1>
                        </div>
                </div>
                
                

            </div>

            <div className='h-screen'></div>
        </div>
            
    )
}