import styles from '@/app/_components/Basket/Basket.module.css';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const Basket: FC = () => {
   return (
      <Link href='basket' className={styles.basket}>
         <ShoppingCart size={36} />
         <span>0,00 zł</span>
      </Link>
   );
};

export default Basket;
