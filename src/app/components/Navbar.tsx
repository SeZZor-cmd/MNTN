"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

function Navbar() {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Start', '01', '02', '03'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let index = 0;
      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          index = i;
        }
      });
      setCurrentStep(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepChange = (index: number) => {
    setCurrentStep(index);
    document.getElementById(`section-${index}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div 
    className='fixed top-0 left-0 right-0 z-50' style={{ width: '1550px', height: '80px' }}>
      <div className="flex justify-between items-center" style={{ width: '1400px', margin: '0 auto' }}>
        {/* Logo */}
        <Image src="/images/Logo.png" width={104} height={24} alt="Logo" className='ml-4' />
        
        {/* Navigation Links */}
        <ul className="flex items-center gap-[40px] text-[18px] font-bold text-white">
          <li><Link href="/">Equipment</Link></li>
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Blog</Link></li>
        </ul>

        {/* Account Section */}
        <div className="flex items-center gap-[8px] mr-4">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83V16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
    fill="white"
  />
</svg>
<span className="font-bold text-[17px] text-white">Account</span>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className='absolute left-0 top-[25rem] flex flex-row rotate-90 items-center'>
        <p className="text-white font-bold mr-4 text-[18px]">Follow us</p>
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faInstagram} className="text-white text-[24px] -rotate-90" />
          <FontAwesomeIcon icon={faTwitter} className="text-white text-[24px] -rotate-90" />
        </div>
      </div>

      

      {/* Vertical Steps */}
      <div className="absolute flex flex-col items-center h-screen justify-center right-8">
        <div className="relative flex flex-col items-center">
          <div className="h-44 w-1 bg-gray-600"></div>
          {steps.map((step, index) => (
            <button
              key={index}
              className={`absolute transform -translate-x-6 transition-transform ${
                index === currentStep ? 'text-white' : 'text-gray-600'
              }`}
              style={{ top: `${index * 25}%` }} 
              onClick={() => handleStepChange(index)}
            >
              {step}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;



