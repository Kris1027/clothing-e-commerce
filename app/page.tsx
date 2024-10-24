import Hero from '@/app/_components/Hero/Hero';
import styles from '@/app/page.module.css';
import { FC } from 'react';

const HomePage: FC = () => {
   return (
      <main className={styles.page}>
         <Hero image='/hero_1.jpg' link='/new' />
         <Hero image='/hero_2.jpg' link='/jackets' />
      </main>
   );
};

export default HomePage;
