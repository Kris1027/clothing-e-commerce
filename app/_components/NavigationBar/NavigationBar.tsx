import styles from '@/app/_components/NavigationBar/NavigationBar.module.css';
import Link from 'next/link';

const NavigationBar = () => {
   return (
      <nav className={styles.navigationBar}>
         <ul>
            <li>
               <Link href="/new">Nowości</Link>
            </li>
            <li>
               <Link href="/accessories">Akcesoria</Link>
            </li>
            <li>
               <Link href="/hoodies">Bluzy</Link>
            </li>
            <li>
               <Link href="/caps">Czapki</Link>
            </li>
            <li>
               <Link href="/tshirts">Koszulki</Link>
            </li>
            <li>
               <Link href="/jackets">Kurtki</Link>
            </li>
            <li>
               <Link href="/pants">Spodnie</Link>
            </li>
            <li>
               <Link href="/baggie">Baggy</Link>
            </li>
            <li>
               <Link href="/xxxxl">Xxxxl</Link>
            </li>
            <li>
               <Link href="/sale">Sale</Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavigationBar;
