import bgimg from '../assets/Background.webp'
import React, { useState, useEffect, useRef } from 'react';
import '../styles.css'
import { RiYoutubeLine } from "react-icons/ri"; 
import { FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import hamburger icons
import 'animate.css'
import SpotifyGrid from '../sections/work';
import ContactForm from '../sections/contact';
import Services from '../sections/services';

export default function Landing() {
        const [menuOpen, setMenuOpen] = useState(false); 
        const workSectionRef = useRef(null); 
        const [blurAmount, setBlurAmount] = useState(0);
      
        // Effect to track scroll position and update blur dynamically
        useEffect(() => {
          const handleScroll = () => {
            if (workSectionRef.current) {
              const rect = workSectionRef.current.getBoundingClientRect();
              const distanceFromTop = rect.top; // Distance from top of viewport
              const windowHeight = window.innerHeight;
      
              // Calculate blur amount based on position of the "work" section relative to the viewport
              const blurValue = Math.max(0, Math.min(10, (windowHeight - distanceFromTop) / windowHeight * 10));
      
              setBlurAmount(blurValue); // Adjust this factor (10) for blur sensitivity
            }
          };
      
          // Attach scroll event listener
          window.addEventListener('scroll', handleScroll);
      
          // Clean up the event listener on component unmount
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);


  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image - moved to bottom layer */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        {/* Use inline styles to set the blur */}
        <img 
          className="w-full h-full object-cover" 
          src={bgimg} 
          alt="Background" 
          style={{ filter: `blur(${blurAmount}px)` }} 
        />
      </div>

      {/* Header with navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:px-12 md:py-4 bg-black bg-opacity-80">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl tracking-widest">HUTTON SMITH</h1>
            <h2 className="text-md">PRODUCER • MIXER • SONGWRITER</h2>
          </div>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? (
                <AiOutlineClose className="h-8 w-8 text-white" />
              ) : (
                <AiOutlineMenu className="h-8 w-8 text-white" />
              )}
            </button>
          </div>

          {/* Navigation Links - visible on larger screens */}
          <nav className="hidden items-center md:flex space-x-6">
            <a href="#work" className="hover:scale-110">work</a>
            <a href="#about" className="hover:scale-110">about</a>
            <a href="#services" className="hover:scale-110">services</a>
            <a href="#contact" className="hover:scale-110">contact</a>
            <a className='hover:scale-110 pl-4' target='_blank' href="https://www.youtube.com/channel/UCaDmbYdgKmINSukz-j1boQQ">
              <RiYoutubeLine className='h-8 w-8' />
            </a>
            <a className='hover:scale-110' target='_blank' href="https://www.instagram.com/huttonsmith">
              <FaInstagram className='h-8 w-8'/>
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li><a href="#work" className="text-lg" onClick={() => setMenuOpen(false)}>Work</a></li>
              <li><a href="#about" className="text-lg" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#services" className="text-lg" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="#contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li>
                <div className='flex items-center justify-start gap-4'>
                        <a className='hover:scale-110' target='_blank' href="https://www.youtube.com/channel/UCaDmbYdgKmINSukz-j1boQQ">
                          <RiYoutubeLine className='h-8 w-8' />
                        </a>
                        <a className='hover:scale-110' target='_blank' href="https://www.instagram.com/huttonsmith">
                        <FaInstagram className='h-8 w-8'/>
                        </a>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="mt-20 relative" style={{ zIndex: 1 }}>
        <div className='w-full h-screen'></div>

        <section ref={workSectionRef} id="work" className=" min-h-screen flex items-center justify-center p-6 md:p-12 relative">
          <div className="relative z-10">
            <SpotifyGrid />
          </div>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-12 relative">
          <div className="bg-white bg-opacity-80 text-black p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">About</h2>
            <p>Your about content goes here...</p>
          </div>
        </section>

        <section id="services" className="min-h-screen w-full flex items-center justify-center relative">
          <Services />
        </section>

        <section id="contact" className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12 relative">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
