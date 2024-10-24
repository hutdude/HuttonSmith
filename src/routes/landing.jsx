import bgimg from '../assets/Background.jpg'
import React from 'react';
import '../styles.css'
import { RiYoutubeLine } from "react-icons/ri"; 
import { FaInstagram } from "react-icons/fa";
import 'animate.css'
import SpotifyGrid from '../sections/work';
import bulldog_bash_action_shot from '../assets/BulldogBashAction.webp';
import ContactForm from '../sections/contact';

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image - moved to bottom layer */}
      <div className="fixed inset-0" style={{ zIndex: 0 }}>
        <img className='w-full h-full object-cover' src={bgimg} alt="Background" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl tracking-widest">HUTTON SMITH</h1>
            <h2 className="text-md">PRODUCER • ENGINEER • MIX/MASTER</h2>
          </div>
          <div className="hidden md:flex space-x-6">
            <a className='hover:scale-110 relative z-50' target='_blank' href="https://www.youtube.com/channel/UCaDmbYdgKmINSukz-j1boQQ">
              <RiYoutubeLine className='h-10 w-10' />
            </a>
            <a className='hover:scale-110 relative z-50' target='_blank' href="https://www.instagram.com/huttonsmith">
              <FaInstagram className='h-10 w-10'/>
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="fixed left-0 top-1/2 transform -translate-y-1/2 p-6 md:p-12 z-40">
        <ul className="space-y-8 text-lg">
          <li><a href="#work" className="hover:scale-110 inline-block relative z-40">work</a></li>
          <li><a href="#about" className="hover:scale-110 inline-block relative z-40">about</a></li>
          <li><a href="#services" className="hover:scale-110 inline-block relative z-40">services</a></li>
          <li><a href="#contact" className="hover:scale-110 inline-block relative z-40">contact</a></li>
        </ul>
      </nav>

      {/* Main Content - increased z-index and added relative positioning */}
      <main className="mt-16 relative" style={{ zIndex: 1 }}>
        {/* Sections */}
        <div className='w-full h-screen'></div>

        <section id="work" className="backdrop-blur-sm  min-h-screen flex items-center justify-center p-6 md:p-12 relative">
          <div className="relative z-10"> {/* Added wrapper with higher z-index */}
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
        <div class="overflow-hidden bg-white py-24 sm:py-32">
  <div class="mx-auto px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div class="lg:pr-8 lg:pt-4">
        <div class="lg:max-w-lg">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">a musician's mindset</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
          <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd" />
                </svg>
                Push to deploy.
              </dt>
              <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd" />
                </svg>
                SSL certificates.
              </dt>
              <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
            </div>
            <div class="relative pl-9">
              <dt class="inline font-semibold text-gray-900">
                <svg class="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                  <path fill-rule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clip-rule="evenodd" />
                </svg>
                Database backups.
              </dt>
              <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
            </div>
          </dl>
        </div>
      </div>
      <img src={bulldog_bash_action_shot} alt="Product screenshot" class="aspect-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"/>
    </div>
  </div>
</div>

        </section>

        <section id="contact" className="min-h-screen bg-white flex items-center justify-center p-6 md:p-12 relative">
          <ContactForm />
        </section>
      </main>
    </div>
  )
}