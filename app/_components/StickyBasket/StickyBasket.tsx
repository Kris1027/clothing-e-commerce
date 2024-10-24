import styles from '@/app/_components/StickyBasket/StickyBasket.module.css';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const StickyBasket: FC = () => {
   return (
      <Link href='basket' className={styles.stickyBasket}>
         <ShoppingCart size={36} />
         <span>0,00 zł</span>
      </Link>
   );
};

export default StickyBasket;
