import React from 'react'

import styles from './Search.module.scss'

import searchIcon from '../../img/search-icon.svg';
import clearButton from '../../img/clear-button.svg';

const Search = ({ searchValue, setSearchValue }) => {
    return (
        <div className={styles.root}>
            <img className={styles.icon} src={searchIcon} alt="search"></img>
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder="Поиск пиццы..."
            />
            <img className={styles.clear} onClick={() => setSearchValue('')} src={clearButton} alt="clear"></img>
        </div>
    );
};

export default Search; 