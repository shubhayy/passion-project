'use client'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import Feature from '@/components/shared/Features';
import {useRef} from 'react';

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const ref = useRef<null | HTMLDivElement>(null); 

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
      };


  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <motion.h1
              className="font-semibold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px] xl:text-[58px] xl:leading-[74px] text-black"
              variants={fadeInVariants}
            >
              The Journey To Your Dream College Begins Here
            </motion.h1>
            <motion.p
              className="p-regular-20 md:p-regular-24 font-medium"
              variants={fadeInVariants}
            >
              Containing Step by Step Guides Personalized to You, An Extensive Extracurricular Lists, and Insider Tips into College Admissions.
            </motion.p>
            <Button size="lg" asChild className="button w-full sm:w-fit" onClick={handleClick}>
              <div className='hover:cursor-pointer'>Quick Start</div>
            </Button>
          </motion.div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section ref={ref}>
        {/* If Feature is a component you want to animate, wrap it with motion components similarly */}
        <Feature />
      </section>
    </>
  );
}
