import { useState } from 'react';
import bulldog_bash_action_shot from '../assets/BulldogBashAction.webp';
import bulldog_bash_action_shot2 from '../assets/BulldogBashAction2.webp';
import state_theatre from '../assets/StateTheatre.webp';
import ricks from '../assets/Ricks.webp';

import { MdAlbum } from "react-icons/md";

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
    <div className="overflow-hidden w-full bg-gray-300 ">
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
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                      </svg>
                      full-stack: 
                    </dt>
                    <dd className="inline"> from pre-pro to mastering, I work with you at every step to shape your song/EP/LP from conception to release</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                        <path fillRule="evenodd" d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clipRule="evenodd" />
                      </svg>
                      Database backups.
                    </dt>
                    <dd className="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <img loading="lazy" className="w-full max-h-screen object-cover" src={bulldog_bash_action_shot2} />
          </div>
        </div>
      </div>)
}