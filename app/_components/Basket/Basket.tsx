import { FC } from 'react';
import styles from '@/app/_components/Basket/Basket.module.css';
import { ShoppingCart } from 'lucide-react';

const Basket: FC = () => {
   return (
      <div className={styles.basket}>
         <ShoppingCart size={36} />
         <span>0,00 zł</span>
      </div>
   );
};

export default Basket;
