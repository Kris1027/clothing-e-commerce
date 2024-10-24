import styles from '@/app/_components/Hero/Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
   image: string;
   link: string;
};

const Hero = ({ image, link }: Props) => {
   return (
      <Link href={link} className={styles.hero}>
         <Image
            className={styles.image}
            src={image}
            alt='hero image'
            fill
            sizes='100vw'
         />
      </Link>
   );
};

export default Hero;
