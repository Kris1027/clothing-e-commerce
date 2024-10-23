import {Search} from 'lucide-react';
import styles from '@/app/_components/SearchBar/SearchBar.module.css'


const SearchBar = () => {
    return (
        <div className={styles.searchBar}>
            <Search size={16}/>
        </div>

    )
}

export default SearchBar;