'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

function HeroSection() {
  const ref = useRef(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollY, [0, 500], [0, -200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -300]);
  const y3 = useTransform(scrollY, [0, 500], [0, -400]);
  const y4 = useTransform(scrollY, [0, 500], [0, -200]);
 


  const textY = useTransform(scrollY, [0, 500], [0, 300]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative z-0" style={{width:'1550px',height:'900px'}}>
      
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-auto">
          <div className="relative w-full h-full" ref={ref}>
            
            <motion.div 
              className="absolute top-0 left-0 w-full h-[20vh]  z-10"
              style={{ y: y1 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/HG.png"
                  width={0}
                  height={0}
                  layout="responsive"
                  alt=""
                  
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    
                  }}
                  sizes="100vw"
                />
              </div>
            </motion.div>

            
            <motion.div 
              className="absolute top-0 left-0 w-full h-[20vh]  z-10"
              style={{ y: y2 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/BG Hero.png"
                  alt=""
                  width={0}
                  height={0}
                  layout="responsive"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                />
              </div>
            </motion.div>

            

           
            <motion.div 
              className="absolute top-[40vh] h-[25vh] w-full z-20"
              style={{ y: y3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/MG.png"
                  width={0}
                  height={0}
                  layout="responsive"
                  alt=""
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                />
              </div>
            </motion.div>

            
            <motion.div 
              className="absolute top-[30vh] mx-auto right-0 left-0 w-[70%] z-30 "
              style={{ y: textY ,opacity:textOpacity }}
            >
              <div className="flex flex-col items-start justify-center text-left text-white">
                <div className="mb-8 flex flex-col items-start gap-[32px]">
                  <div className="flex items-center gap-[32px]">
                    <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
                    <span className="text-[#FBD784] font-extrabold tracking-[6px] uppercase text-[18px]">
                      A Hiking Guide
                    </span>
                  </div>
                  <h2 className="leading-[100px] text-[88px] font-semibold capitalize text-white">
                    <span>Be prepared for the </span>
                    <span>Mountains and beyond!</span>
                  </h2>
                  <div className="flex items-center gap-[16px] text-[18px] font-bold text-white">
                    <span>Scroll Down</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="24"
                      viewBox="0 0 16 24"
                      fill="none"
                    >
                      <path
                        d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>


            
            <motion.div 
              className="absolute top-[65vh] left-0 h-[10vh] w-full z-40"
              style={{ y: y4 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/VG.png"
                  layout="responsive"
                  alt=""
                  sizes="100vw"
                  width={0}
                  height={0}
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </motion.div>

           
            <motion.div 
              className="absolute top-[90vh]  left-0 h-[25vh] w-full z-40"
              style={{ y: y4 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/BG Content.png"
                  alt=""
                  width={0}
                  height={0}
                  layout="responsive"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  sizes="100vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
