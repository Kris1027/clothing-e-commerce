'use client';

import Divider from '@/app/_components/Divider/Divider';
import Logo from '@/app/_components/Logo/Logo';
import StickyBasket from '@/app/_components/StickyBasket/StickyBasket';
import styles from '@/app/_components/StickyNavBar/StickyNavBar.module.css';
import { useEffect, useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';

const StickyNavBar = () => {
   const [isVisible, setIsVisible] = useState<boolean>(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;

         if (scrollPosition > 180) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <nav className={styles.stickyNavBar}>
         {isVisible && (
            <>
               <div className={styles.container}>
                  <Logo />
                  <NavigationBar />
               </div>
               <Divider />
               <StickyBasket />
            </>
         )}
      </nav>
   );
};

export default StickyNavBar;
