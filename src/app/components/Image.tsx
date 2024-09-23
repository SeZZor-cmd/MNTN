"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useParallax } from "../hooks/useParallax";

interface ImageProps {
  id: number;
  imagePath: string;
  description: string;
  title: string;
  subtitle: string;
}

export function Image({ id, imagePath, description, title, subtitle }: ImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <motion.section
      id={`section-${id}`}  
      transition={{ type: "spring", stiffness: 100 }}
      className="flex h-'1080px' justify-center items-center relative"
      style={{ scrollSnapAlign: 'center', perspective: '500px' }}
    >
      <div className='flex bg-[#0B1D26]' style={{width:'1550px'}}>
        <div className="flex mx-auto relative" style={{width:'1350px', height:'900px'}}>
          <motion.div
            style={{ y }}
            className="relative py-[141px] pl-[150px] pr-[114px] flex flex-col gap-[27px]"
          >
            <div className="absolute top-0 left-0 text-[240px] font-bold leading-[240px] text-white/[0.1] z-0">
              {`#0${id}`}
            </div>
            <div className="flex gap-[32px] items-center">
              <div className="w-[72px] h-[2px] bg-[#FBD784]"></div>
              <span className="text-[#FBD784] font-extrabold tracking-[6px] uppercase text-[18px]">
                {title}
              </span>
            </div>
            <h2 className="text-[64px] font-semibold text-white flex flex-col">
              {subtitle}
            </h2>
            <p className="text-[18px] font-bold leading-[32px] text-white">
              {description}
            </p>
            <div className="flex gap-[16px] text-[18px] font-bold items-center text-[#FBD784]">
              <span>read more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
              >
                <path
                  d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
                  fill="#FBD784"
                />
              </svg>
            </div>
          </motion.div>
          <div ref={ref} className="w-[40%] h-[600px] shrink-0 relative">
            <img src={imagePath} alt={`Image ${id}`} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
