import { useState } from 'react';
import bulldog_bash_action_shot from '../assets/action-shot.jpeg';
import bulldog_bash_action_shot2 from '../assets/action-shot.jpeg';
import state_theatre from '../assets/StateTheatre.webp';
import ricks from '../assets/Ricks.webp';

import noise from '../assets/bedge-grunge.png';

import { MdAlbum } from "react-icons/md";
import { PiFadersBold } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";

const Carasel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const images = [
    bulldog_bash_action_shot2,
      bulldog_bash_action_shot,
      state_theatre,
      ricks,
    ];
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative w-full" data-carousel="slide">
        <div className="relative h-56 overflow-hidden md:h-96">
          {images.map((img, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${index === activeIndex ? 'block' : 'hidden'}`}
              data-carousel-item
            >
              <div className="h-full w-full overflow-hidden rounded-lg">
                  <img
                    src={img}
                    className="absolute block w-full h-full object-contain "
                    alt={`Carousel Image ${index + 1}`}
                  />
              </div>
            </div>
          ))}
        </div>
  
        {/* Navigation */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-40 flex items-end justify-end h-full px-4 cursor-pointer"
          onClick={handlePrev}
          aria-label="Previous"
        >
          {/* SVG for previous button */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-40 flex items-end justify-end h-full px-4 cursor-pointer"
          onClick={handleNext}
          aria-label="Next"
        >
          {/* SVG for next button */}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
    <span className="sr-only">Next</span>
  </span>
        </button>
      </div>
    );
  };

export default function Services() {
    return(
    <div className="overflow-hidden w-full bg-white ">
        <div className="mx-auto w-full">
          <div className="mx-auto w-full  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pr-8 px-6 lg:px-8 lg:pt-4">
          

              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">"music-first" production</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">what I offer</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">As a fellow musician, I treat your music with the care and attention I want mine to be treated. What sets me apart is my attention to detail: I don't cut coners at any step of the process.</p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                        <MdAlbum className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      fully personalized production: 
                    </dt>
                    <dd className="inline"> whether your sonic goals are modern and punchy or raw and powerful, my goal is to most accurately instantiate your artistic vision</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                    <FaSpotify className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      full-stack: 
                    </dt>
                    <dd className="inline"> from pre-pro to mastering, I work with you at every step to shape your song/EP/LP from concept to release</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                    <PiFadersBold className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      professional mixing and mastering: 
                    </dt>
                    <dd className="inline"> I ensure your track has the perfect balance and polish, optimizing it for streaming, radio, and any other distribution platform.</dd>
                  </div>
                </dl>
              </div>
              
            </div>

            <img loading="lazy" className="w-full max-h-screen object-cover" src={bulldog_bash_action_shot2} />
          </div>
        </div>
      </div>)
}