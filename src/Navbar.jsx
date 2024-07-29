'use client'

import { useState } from 'react'
import hsFavicon from './assets/fav.gif'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'
import './navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const backgroundOpacity = useTransform(
    scrollY,
    [200, 400],
    [0.75, 1]
  )

  const borderOpacity = useTransform(
    scrollY,
    [200, 400],
    [0, 4]
  )

  const scale = useTransform(
    scrollY,
    [200, 400],
    [1, 0.95]
  )

  const paddingValue = useTransform(
    scrollY,
    [200, 400],
    [16, 0]
  )

  const roundedValue = useTransform(
    scrollY,
    [200, 400],
    [50, 0]
  )

  const marginValue = useTransform(
    scrollY,
    [200, 400],
    ['fit', '0%']
  )

  const handleMobileMenuItemClick = (href) => {
    setMobileMenuOpen(false)
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div style={{padding: paddingValue}} className="w-full fixed z-10">
      <motion.div className="relative z-50 w-full mx-auto">
        <motion.div  
          className="relative w-full inset-0 bg-white border-gray-950"
          style={{borderBottomWidth: borderOpacity, borderRadius: roundedValue, opacity: backgroundOpacity,}}
        >
        <nav aria-label="Global" className="relative flex items-center justify-between p-4 lg:px-8 max-w-4xl mx-auto">
          <div className="flex-1 flex items-center justify-start">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={hsFavicon} className="h-32 -my-8 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 flex-1 justify-center">
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
            <div className='section-menu-item'>
              
                about
              
            </div>
            </a>
            <a href="#work" className="text-sm font-semibold leading-6 text-gray-900">
            <div className='section-menu-item'>
              
                work
                </div>     
              </a>        
            <a href="#services" className="text-sm font-semibold leading-6 text-gray-900">

            <div className='section-menu-item'>
                services
            </div>
            </a>
            <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">
            <div className='section-menu-item'>
              
                contact
            </div>
            </a>
          </PopoverGroup>
          <div className="hidden lg:flex flex-1 justify-end gap-4">
            <motion.a 
              href="https://www.youtube.com/@huttonsmith-music" 
              target='_blank' 
              className="text-sm font-semibold leading-6 text-gray-900"
              whileHover={{ scale: 1.1 }}
            >
              <FaYoutube className='h-8 w-8 social-item' /> 
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/huttonsmith" 
              target='_blank' 
              className="text-sm font-semibold leading-6 text-gray-900"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram className='h-8 w-8 social-item' /> 
            </motion.a>
          </div>
        </nav>
        </motion.div>
      </motion.div>

      {/* Mobile menu dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              
              <img
                className="h-8 w-auto"
                src={hsFavicon}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoMdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#about"
                  onClick={() => handleMobileMenuItemClick('#about')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  about
                </a>
                <a
                  href="#work"
                  onClick={() => handleMobileMenuItemClick('#work')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  work
                </a>
                <a
                  href="#services"
                  onClick={() => handleMobileMenuItemClick('#services')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  services
                </a>
                <a
                  href="#contact"
                  onClick={() => handleMobileMenuItemClick('#contact')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  contact
                </a>
              </div>
              <div className="py-6">
                <div className="flex justify-start space-x-6">
                  <a href="https://www.youtube.com/@huttonsmith-music" target='_blank' className="text-gray-400 hover:text-gray-500">
                    <FaYoutube className="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a href="https://www.instagram.com/huttonsmith" target='_blank' className="text-gray-400 hover:text-gray-500">
                    <FaInstagram className="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </motion.div>
  )
}