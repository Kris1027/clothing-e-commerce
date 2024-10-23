import styles from '@/app/_components/NavigationBar/NavigationBar.module.css';

const NavigationBar = () => {
   return (
      <nav className={styles.navigationBar}>
         <ul>
            <li>nowości</li>
            <li>akcesoria</li>
            <li>bluzy</li>
            <li>czapki</li>
            <li>koszulki</li>
            <li>kurtki</li>
            <li>spodnie</li>
            <li>baggy</li>
            <li>xxxxl</li>
            <li>sale</li>
         </ul>
      </nav>
   );
};

export default NavigationBar;
