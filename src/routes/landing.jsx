        import bgimg from '../assets/Background.jpg'
        import React from 'react';
        import '../styles.css'
        import { RiYoutubeLine } from "react-icons/ri"; 
        import { FaInstagram } from "react-icons/fa";
        import 'animate.css'
        import Work from '../sections/work';

        export default function Landing() {
        return (
                <div className="min-h-screen bg-black text-white">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-50  p-6 md:p-12">
                        <div className="flex justify-between items-center">
                        <div>
                                <h1 className="text-xl tracking-widest">HUTTON SMITH</h1>
                                <h2 className="text-md">PRODUCER • ENGINEER • MIX/MASTER</h2>
                        </div>
                        <div className="hidden md:flex space-x-6">
                                <a className='hover:scale-110' target='_blank' href="https://www.youtube.com/channel/UCaDmbYdgKmINSukz-j1boQQ">
                                <RiYoutubeLine className='h-10 w-10' />
                                </a>
                                <a className='hover:scale-110' target='_blank' href="https://www.instagram.com/huttonsmith">
                                <FaInstagram className='h-10 w-10'/>
                                </a>
                        </div>
                        </div>
                </header>

                {/* Navigation */}
                <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 p-6 md:p-12 z-40">
                        <ul className="space-y-8 text-lg">
                        <li><a href="#about" className="hover:scale-110 inline-block">about</a></li>
                        <li><a href="#work" className="hover:scale-110 inline-block">work</a></li>
                        <li><a href="#services" className="hover:scale-110 inline-block">services</a></li>
                        <li><a href="#contact" className="hover:scale-110 inline-block">contact</a></li>
                        </ul>
                </nav>

                {/* Main Content */}
                <main className="mt-16 relative z-30">
                        {/* Background Image */}
                        <div className="fixed inset-0 z-0">
                        <img className='w-full h-full object-cover' src={bgimg} alt="Background" />
                        </div>

                        {/* Sections */}
                        <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                        <div className="bg-white bg-opacity-80 text-black p-8 rounded-lg">
                                <h2 className="text-4xl font-bold mb-4">About</h2>
                                <p>Your about content goes here...</p>
                        </div>
                        </section>

                        <section id="work" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                        <Work />
                        </section>

                        <section id="services" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                        <div className="bg-white bg-opacity-80 text-black p-8 rounded-lg">
                                <h2 className="text-4xl font-bold mb-4">Services</h2>
                                <p>Your services content goes here...</p>
                        </div>
                        </section>

                        <section id="contact" className="min-h-screen flex items-center justify-center p-6 md:p-12">
                        <div className="bg-white bg-opacity-80 text-black p-8 rounded-lg">
                                <h2 className="text-4xl font-bold mb-4">Contact</h2>
                                <p>Your contact content goes here...</p>
                        </div>
                        </section>
                </main>
                </div>
        )
        }