import Link from 'next/link';
import SearchBar from '@/app/_components/SearchBar/SearchBar';
import styles from '@/app/_components/AccountBar/AccountBar.module.css'

const AccountBar = () => {
    return (
        <div className={styles.accountBar}>
            <Link href='/'>Zaloguj się</Link>
            <Link href='/'>Załóż konto</Link>
            <SearchBar/>
        </div>
    )
}

export default AccountBar;