import AccountBar from '@/app/_components/AccountBar/AccountBar';
import Logo from '@/app/_components/Logo/Logo';
import NavigationBar from '@/app/_components/NavigationBar/NavigationBar';
import styles from '@/app/_components/TopBar/TopBar.module.css';
import { FC } from 'react';

const TopBar: FC = () => {
   return (
      <header className={styles.topBar}>
         <Logo />
         <div className={styles.container}>
            <AccountBar />
            <NavigationBar />
         </div>
      </header>
   );
};

export default TopBar;
