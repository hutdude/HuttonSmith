import bgimg from '../assets/Background.jpg'
import React from 'react';
import '../styles.css'
import { RiYoutubeLine } from "react-icons/ri"; 
import { FaInstagram } from "react-icons/fa";
import 'animate.css'
import Work from '../sections/work'
import Services from '../sections/services';
import Navbar from '../Navbar';
import gif from '../assets/fav.gif'


export default function Landing() {
return (
        
        <div>
                
                <div className="min-h-screen bg-black text-white">
                <main className="relative">
                        
        <Navbar />
                        {/* Background Image */}
                        <div className="absolute w-full h-full inset-0 z-0">
                                <img className='w-full h-screen object-cover z-0' src={bgimg} alt="Background" />
                                
                        </div>
                        {/* Sections */}
                        <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                        <div className="bg-white bg-opacity-80 text-black p-8 rounded-lg">
                                <h2 className="text-4xl font-bold mb-4">About</h2>
                                <p>Your about content goes here...</p>
                        </div>
                        </section>
                        <section id="work" className='py-32' >
                                <h2 className='text-white font-bold text-center text-3xl'>recent projects</h2>
                                <div >
                                        <Work />
                                </div>
                        </section>
                        <section id="services" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                                <Services />
                        </section>
                        <section id="contact" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                        <div className="bg-white bg-opacity-80 text-black p-8 rounded-lg">
                                <h2 className="text-4xl font-bold mb-4">Contact</h2>
                                <p>Your contact content goes here...</p>
                        </div>
                        </section>
                </main>
                </div>
        </div>
)
}